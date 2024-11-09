const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users');
const homePageRoutes = require('./routes/homepage');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data', usersRoutes);
app.use(homePageRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(8080);
