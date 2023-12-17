//req.body para recuperar del body
//req.params para recuperar de la /url
//req.query para recuperar de las querys ?search=xxx

//"Dependencias"

const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override");

const mainRoutes = require("./src/routes/main.routes");
const shopRoutes = require("./src/routes/shop.routes");
const authRoutes = require("./src/routes/auth.routes");
const adminRoutes = require("./src/routes/admin.routes");

const PORT = 3000;

// TEMPLATE ENGINES

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

//Middlewares de configuracion

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride("_method"));

//Rutas

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).send("La pagina que buscas no existe.");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
