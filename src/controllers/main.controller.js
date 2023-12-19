module.exports = {
    home: (req, res) => {
        res.render('index', {
            title: "Home"
        });
    },
    contact: (req, res) => res.send('Esta es la vista de CONTACTO'),
    about: (req, res) => res.send('Esta es la vista SOBRE NOSOTROS'),
    faqs:(req, res) => res.send('Esta es la vista de PREGUNTAS FRECUENTES')
}