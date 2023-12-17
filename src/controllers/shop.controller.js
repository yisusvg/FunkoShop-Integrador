const path = require("path");

module.exports = {
  shop: (req, res) => res.render("shop/shop"),
  item: (req, res) => res.render("shop/item"),
  itemAdd: (req, res) => res.render("shop/item"),
  cart: (req, res) => res.render("shop/cart"),
};
