/*
 * @Descripttion: 
 * @version: 
 * @Author: cholee
 * @Date: 2020-08-12 10:43:36
 * @LastEditors: cholee
 * @LastEditTime: 2020-08-13 13:54:27
 */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//导入router中间件
var router = require("./libs/router.js");
//创建ejs模块
var app = express();

// === 模板开始 ===
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//引用bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //设置静态资源地址
//设置准许跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// 加载路由模块
app.use("/", router.indexRouter);
app.use("/api/test", router.testRouter);
app.use("/users", router.usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
//设置端口
app.listen(443);
console.log("app start success port:443");
module.exports = app;
