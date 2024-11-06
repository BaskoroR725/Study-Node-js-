const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    next();
});

app.use('/users',(req, res, next) => {
    console.log('Hello users')
    res.send('<h1>On Users page</h1>');
});

app.use('/',(req, res, next) => {
    console.log('Home page');
    res.send('<h1>Hello this is Home page!</h1>');
});

app.listen(3000, (req,res) =>{
    console.log('listening on port 3000')
})