/*
*express
* 第三方模块，第三方框架
* express
* 1路由
* 2【中间件】
* 模板解析
* 静态文件服务器
*
*
* 日志
* 错误处理
* */
var express = require("express");
var app = express();
var fs = require("fs");
//【1】路由配置
//用户通过get请求访问
//用过通过get请求访问  /这个路径
/*
*[【中间件】]====>把功能抽出来先执行
* 是处理http请求，用来完成各种特定的任务
* 比如检查用户是否登陆，增加工具方法等
* 最大特点
*   一个中间件处理完毕后，才能将数据传递给下一个中间件
*   app.use(路径，中间件函数);
*
* */
app.use(function(req,res,next){
    res.print = function(content){
        this.end(content);
    }
    next();
});
app.get('/art',function(req,res){
    res.print('art');
});
//one
app.use(function(req,res,next){
    req.money = 100;
    next();
});
//two
app.use(function(req,res,next){
    console.log(req.money);
    req.money = req.money - 20;
    next();
});
//three
app.use(function(req,res,next){
    req.money = req.money -60;
    next();
});
app.use("/get",function(req,res){
    res.end(";;;" + req.money);
});

app.listen(8080);