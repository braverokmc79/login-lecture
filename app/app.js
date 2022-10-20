//모듈
const express = require("express");
const app = express();



//라우터
const home = require("./src/routes/home");


//앱 셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //use ->미들웨어를 등록해 주는 메소드.


module.exports = app;
