//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan')
const app = express();
const accessLogStream = require("./src/config/log");

dotenv.config();

//라우터
const home = require("./src/routes/home");




// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'));
app.use(morgan('common', { stream: accessLogStream }));


app.use("/", home); //use ->미들웨어를 등록해 주는 메소드.



module.exports = app;


