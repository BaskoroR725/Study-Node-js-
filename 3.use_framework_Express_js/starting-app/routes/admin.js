const express = require('express');
const path = require('path'); 

const router = express.Router();
const rootDir = require('../utils/path');

router.get('/add-product',(req, res, next) => {
    /* res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="product"><button type="submit">submit</button></input></form>'); */
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post('/add-product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;