const express = require('express');
const app = express();
const cors = require('cors');
const nunjucks = require('nunjucks');


app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
})

app.use(express.urlencoded({extended:false}));
app.use(cors());

