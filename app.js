const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const userRoutes = require('./src/routes/user.routes');
const adminRoutes = require('./src/routes/admin.routes');

const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));


app.use('/auth', userRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/', mainRoutes);

app.use((req, res)=> {
    res.status(404).send('La pagina solicitada no existe');
});