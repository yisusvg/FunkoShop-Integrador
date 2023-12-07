const express = require ('express');
const path = require('path');
const router = express.Router();
const shopController = require('../controllers/shop.controller');


//router.get('/', (req,res) => res.send('Vista de shop'));

/*router.get('/item/:id', (req,res)=>{
    const {id} = req.params;
    res.send(`Usted solicito el item: ${id}`);
})*/

router.get('/', shopController.shop);
router.get('/item/:id', shopController.item);
router.get('/edit/:id/add',shopController.itemAdd);
router.get('/cart',shopController.cart);






module.exports = router;

