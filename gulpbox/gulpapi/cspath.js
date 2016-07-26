var gulp = require("gulp");
var fs = require("fs");
var path = require("path");

console.log(path.dirname(__dirname));//D:\jihuitian\practice\gulpbox
console.log(__dirname);//D:\jihuitian\practice\gulpbox\gulpapi
console.log(path.resolve('../../'));//d:\jihuitian\practice
console.log(path.extname("./cspath.js"));//.js
console.log(path.resolve("/m","txt.txt"));//d:\m\txt.txt
console.log(path.resolve("/m","a","txt.txt"));//d:\m\a\txt.txt
console.log("-------");
console.log(path.basename("./cspath.js"));//cspath.js
console.log(path.basename("./cspath.js",'.js'));//cspath
console.log("-----分隔符----");
console.log(path.sep);//   \
console.log(path.delimiter);//    ;
console.log("-------");
console.log(path.relative(__dirname,"a.js"));


