const path = require('path');

module.exports ={
    home: (req,res) => res.render('index',{
        title:"Hola desde home"
    }),
    contacto: (req,res) => res.send('Soy contactos'),

}