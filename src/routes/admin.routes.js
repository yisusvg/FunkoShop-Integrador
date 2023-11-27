const express = require('expess');
const router = express.router();

router.post('/item/:id', (req, res)=>{
    const {id} = req.params;
    res.send(`esta seguro?: ${id}`);
})

router.delete('/item/:id', (req, res)=>{

})

module.exports = router;