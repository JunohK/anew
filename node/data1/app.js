const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const fs = require('fs');
// view engine setup
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

//mongoose configuration
const mongoose = require("mongoose")
mongoose.connect('mongodb://15.164.184.253:27017/mydb')

// routes setup
var main = require('./routes/main.js');
app.use('/', main);

// image
app.get('/img', function(req, res) {
    fs.readFile('http://www.kma.go.kr/repositary/image/cht/img/sfc3_2022120900.png', function(error, data) {
        res.writeHead(200, { 'Context-Type' : 'text/html' })
        res.end(data);
    })
})


app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});