const { log } = require('console');
const express = require ('express');

const path = require('path');


const router = express.Router();



/* MAIN ROUTES */

router.get('/login', (req,res) => res.sendFile(path.resolve(__dirname,'../../public_html/login.html')));

router.post('/login', (req,res)=>{
    const {user,password} = req.body;
    console.log(req.body);
    
    res.redirect(200,'/'); //aca podría enviar alguna cookie para que vea que esta logueado

})



module.exports = router;

