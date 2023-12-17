//Ver Todos los productos

//Ver algunos productos

//Crear productos

//Eliminar productos


//Editar/actualizar productos

const { conn } = require('../config/conn');

//Agarrar todos los productos

const getAll = async () => {
    try{
        const [rows] = await conn.query('SELECT * FROM product;');
        return rows;
    } catch(error){
        throw error;
    } finally{
        conn.releaseConnection();
    }
   
}

module.exports = {
    getAll
}