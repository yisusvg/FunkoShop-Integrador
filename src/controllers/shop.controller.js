const path = require("path");
const {getAll} = require ('../models/product.model');
const { log } = require("console");

const data = [

];


module.exports = {


  shop: async (req, res) =>{

    const dbdata = await getAll();

    res.render(("shop/shop"),{
      //data
    });
  },
   

  

  item: (req, res) => res.render("shop/item"),
  itemAdd: (req, res) => res.render("shop/item"),
  cart: (req, res) => res.render("shop/cart"),
};
