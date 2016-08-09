/*
*请求方法  method
* 请求路径  pathname
* 查询字符串 query
*  请求头 headers
*
* */
var express = require("express");
var app = express();
var fs = require("fs");
var url = require('url');

app.use(function(req,res,next){
    req.path = url.parse(req.url,true).pathname;
    next();
});

app.get('/login',function(req,res){
    console.log(req.method);//请求方法
    console.log(req.path);//请求的pathname
    console.log(req.query);//请求的查询字符串
    console.log(req.headers);//请求对象
    res.end('404');
});
//路径参数
app.get('/user/delete/:id/:name',function(req,res){
    console.log(req.params.id);
    console.log(req.params.name);
});


app.listen(8081);