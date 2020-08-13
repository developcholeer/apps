/*
 * @Descripttion:
 * @version:
 * @Author: cholee
 * @Date: 2020-08-12 16:15:49
 * @LastEditors: cholee
 * @LastEditTime: 2020-08-13 09:14:58
 */

const express = require("express");
const router = express.Router();
const request = require("request");
//引入封装的http模块
const api = require("../../utils/api");
/* GET home page. */
router.get("/", function (req, res, next) {
  // let url = "http://v.juhe.cn/toutiao/index";
  // let data = {
  //   type: "top",
  //   key: "fe7145b5b0c3868c9d6f276b69146971"
  // };
  //   let s =api.getUrl(
  //     "http://v.juhe.cn/toutiao/index?type=top&key=fe7145b5b0c3868c9d6f276b69146971"
  //   );
  //   res.send(s);
  request(
    "http://v.juhe.cn/toutiao/index?type=top&key=fe7145b5b0c3868c9d6f276b69146971",
    (error, response, body) => {
      // return response;
      res.send(body);
    }
  );
});

//一个Router实例是一个完整的中间件和路由系统
module.exports = router;
