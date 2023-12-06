const express = require ('express');

const path = require('path');


const router = express.Router();


//Muy interesanteee, usando path params...
    //Sabes lo que es un Query Param, por lo general se pone con el get
    //Queda re expreso en la url con los ?joan&catalan
    //Path param es lo mismo pero es con un path, osea, es solo /"tu dato"
router.get('/', (req,res) => res.send('Vista de shop'));
router.get('/item/:id', (req,res)=>{
    const {id} = req.params;
    res.send(`Usted solicito el item: ${id}`);
})





module.exports = router;

