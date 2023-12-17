const path = require("path");

module.exports = {
  admin: (req, res) => res.render("admin/admin"),
  create: (req, res) => res.render("admin/create"),
  edit: (req, res) => res.render("admin/edit"),
  delete: (req, res) => res.send("Viste Admin Delete"),
};
