/*
*
*npm install ejs
* */
var express = require("express");
var app = express();
var fs = require("fs");
var url = require('url');
//指定模板引擎
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'tmpl'));
//对于html类型的模板调用 __express来进行渲染
app.engine('html',require('ejs').__express);


app.get('/login',function(req,res){
    res.render('login',{username:"jht"});
});

//app.get('/login',function(req,res){
//    //fs.createReadStream('login.html').pipe(res);
//   var content =  fs.readFileSync('login.html','utf8');
//    content = content.replace('<%=title%>','denglu');
//    res.send(content);
//});

app.listen(8081);