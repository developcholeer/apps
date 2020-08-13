/*
 * @Author: cholee
 * @Date:  2020-08-12
 * @Last Modified by: cholee
 * @Last Modified time:
 */
const path = require("path");
const resolve = function (_path) {
  return path.resolve(path.resolve(__dirname, "../"), _path);
};
//定义路由二级入口

const web = resolve("routes/web"); //后台ejs页面请求入口
const wx = resolve("routes/wx"); //微信小程序路由入口
const pc = resolve("routes/pc"); //pc端路由入口

// ===路由信息(接口地址)开始存放在./routes目录下===
const indexRouter = require(web + "/index");
const testRouter = require(pc + "/test");
const usersRouter = require(pc + "/users");

const router = {
  indexRouter,
  testRouter,
  usersRouter,
};
module.exports = router;
