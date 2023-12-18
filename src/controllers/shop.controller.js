const path = require("path");
const {getAll} = require ('../models/product.model');
const { log } = require("console");

const data = require('../data/characters.json');


module.exports = {


  shop: async (req, res) =>{

    const dbdata = await getAll();

    res.render(("shop/shop"),{
      data
    });
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
