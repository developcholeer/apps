/*
 * @Descripttion: 默认首页
 * @version:
 * @Author: cholee
 * @Date: 2020-08-12 10:43:36
 * @LastEditors: cholee
 * @LastEditTime: 2020-08-13 13:42:08
 */
var express = require("express");
var router = express.Router();
//引入封装的http模块
const api = require("../../utils/api");
/* GET home page. */
router.get("/", function (req, res, next) {
  let opt = {
    host: "localhost",
    port: 443,
    path: "/api/test",
  };
  api
    .ask(opt)
    .then((data) => {
      let list = JSON.parse(data);
      console.log(list);
      res.render("index", { list: list});
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
