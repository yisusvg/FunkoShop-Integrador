const path = require("path");
const {getAll, deleteProduct} = require ('../models/product.model');
const { log } = require("console");

const data = require('../data/characters.json');


module.exports = {


  shop: async (req, res) =>{

    const dbdata = await getAll();

    console.log(dbdata);

    res.render(("shop/shop"),{
      data
    });
  },

  itemDelete: async (req, res) => {
    const { product_id } = req.params;
    const dbdata = await deleteProduct(product_id);
    console.log(dbdata);
    res.redirect("/shop");  
  },

  item: (req, res) => {
    const itemId = req.params.id;
    const item = data.find(item => item.product_id == itemId);

    res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
        title: "Item",
        item
    });
},
 
  itemAdd: (req, res) => res.render("shop/item"),
  cart: (req, res) => res.render("shop/cart"),
};
