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


app.get('/num',function(req,res){
    res.send(300);
});
app.get('/obj',function(req,res){
    res.send({name:"jht"});
});
app.listen(8081);