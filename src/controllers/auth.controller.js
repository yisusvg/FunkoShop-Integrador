const path = require("path");

module.exports = {
  login: (req, res) => res.render("admin/login"),
  logout: (req, res) => res.send("Vista Logout"),
  register: (req, res) => res.render("admin/register"),
};
