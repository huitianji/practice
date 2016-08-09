/*
*
*npm install ejs
* */
var express = require("express");
var app = express();
var fs = require("fs");
var url = require('url');
var path = require("path");

var bodyParser = require('body-parser');//中间件
//处理文件上传的中间件   只解析类型是multipart/form-dat的类型
var multer = require('multer');

//指定模板引擎
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'tmpl'));
//对于html类型的模板调用 __express来进行渲染
app.engine('html',require('ejs').__express);
//
app.use(bodyParserjson());//一个json字符串
app.use(bodyParser.urlencoded({extended:true}));//对象

app.get('/login',function(req,res){
    res.render('login',{username:"jht"});
});



app.listen(8081);