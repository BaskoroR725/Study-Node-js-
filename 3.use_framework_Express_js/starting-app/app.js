const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes= require('./routes/shop');
const rootDir = require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'notFound.html'))
})

app.listen(3000, (req,res) =>{
    console.log('listening on port 3000')
})