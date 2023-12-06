const path = require('path');

module.exports ={
    login: (req,res) => res.sendFile(path.resolve(__dirname,'../../public_html/login.html')),
}