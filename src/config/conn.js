const mysql = require('mysql2');


//Estaría bueno que tengamos todos el mismo nombre de la base
    //de datos. IMPORTANTE: EN PASSWORD va la contraseña
        //que ustedes hayan puesto.

const pool = mysql.createPool({
    user:'root',
    password:'123456', //<------
    host:'localhost',
    port: 3306,
    database:'funkoshop', //<-----
    connectionLimit:10,
    waitForConnections:true,
    queueLimit:0
});

pool.getConnection((err, conn) =>{
    if(err){
        console.log("Hubo un error al conectarse a la DB: " + err);
    }else{
        console.log('Conexión a la Base de datos exitosa');
        conn.release();
    }
});

module.exports= {
    conn: pool.promise()
}