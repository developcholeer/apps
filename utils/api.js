/*
 * @Descripttion: 封装http请求
 * @version: 1.0.0
 * @Author: cholee
 * @Date: 2020-08-12 16:56:01
 * @LastEditors: cholee
 * @LastEditTime: 2020-08-13 13:46:47
 */

const http = require("http");
const request = require("request");
const querystring = require("querystring");
/**
 * request get后台调用请求数据接口
 * //http://v.juhe.cn/toutiao/index?type=top&key=fe7145b5b0c3868c9d6f276b69146971
 * @param {String} 接口 http://v.juhe.cn/toutiao/index
 * @param {Object}} 参数
 * @returns
 */
function getUrl(url) {
  request(url, (error, response, body) => {});
}
/**
 * @Descripttion:异步后台请求模块
 * @Author: cholee
 * @param {type}
 * @return {type}
 */
function ask(params) {
  let opt = Object.assign(
    {
      host: "", //域名或主机
      port: "", //端口
      path: "", //路径
      method: "", //请求方法
      headers: {
        //请求头
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Connection: "keep-alive",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36",
      },
    },
    params
  );
  if (opt.type) {
    http = require("https");
    opt.port = 443;
  }
  return new Promise((resolve, reject) => {
    let req = http.request(opt, (res) => {
      let data = "";
      res.on("data", function (chunk) {
        data += chunk;
      });
      res.on("end", () => {
        resolve(data); //执行成功回调
      });
      res.on("error", function (e) {
        reject(e); //执行失败回调
      });
    });
    req.end();
  });
}

module.exports = {
  getUrl,
  ask,
};
