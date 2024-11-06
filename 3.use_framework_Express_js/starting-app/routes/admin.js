const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    /* res.send('<form action="/admin/add-product" method="POST"> <input type="text" name="product"><button type="submit">submit</button></input></form>'); */
    res.sendFile(path.join(__dirname, '../','views','add-product.html'))
});

router.post('/add-product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;