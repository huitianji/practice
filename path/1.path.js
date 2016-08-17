/*
*
*path.normalize
*
*1.normalize 将非标准的路径 字符串 转化为标准的路径字符串
*2. 他会解析 。 和 。。
* 3.多个斜杠转化为一个斜杠
* 4.window 下反斜杠转化为正斜杠
* 5.如果是斜杠结尾，转换结束后保留
* */
var fs = require("fs");
var path = require("path");
console.log(path.normalize("./a///b//d//..//c//e//..///"));
/*
*join   将多个参数值字符串合并为一个路径字符串
*
* */
console.log(path.join(__dirname,"a","b","msg"));//D:\jihuitian\node\11.path\a\b\msg
console.log(fs.readFileSync(path.join(__dirname,"a","b","msg"),"utf-8"));
/*
path.resolve
* resolve
* 以应用程序根目录为起点,根据参数值解析一个绝对路径;
* 1>以应用程序根目录为起点
* 2》 。当前目录    。。上级目录
* 3> 普通字符串开头的 表示 当前目录的子目录
* 4>/开头的表示一个绝对路径,表示根目录
* 5>如果没有下一个参数字符串,返回当前路径
* 6>空参数 代表当前绝地目录路径
* */
console.log("resolve================================");
 console.log(path.resolve());  //D:\jihuitian\node\11.path
console.log(path.resolve("/a","..","a","b","msg"));//D:\a\b\msg
console.log(path.resolve(".","msg.txt"));//D:\jihuitian\node\11.path\msg.txt
console.log(fs.readFileSync(path.resolve(".","msg.txt"),"utf8"));

/*
*relative  用于获取两个路径之间的相对关系
* path.relative(from,to);
* 1>两个参数可以是相对路径，也可以是绝对路径
* 2>返回在第一个路径中如果访问第二个路径
* */
console.log(path.relative(__dirname,"../stream"));
/**
 *dirname   该方法用于获取第一个路径 中的 (目录名)
 *1>参数可以是相对路径。也可以是绝对路径
 * 2>如果是目录的话，返回上级目录，如果是文件 返回文件所属目录
 *
 **/
//console.log(path.resolve(__dirname));
console.log("dirname+++++++++++++++++++++++++++++++++");
console.log(path.dirname());//
console.log(path.dirname(__dirname));//D:\jihuitian\node
console.log(path.dirname("./path.js"));//.
console.log(__dirname);//返回父目录   D:\jihuitian\node\11.path

/*
*basename  获取一个路径中的  文件名
* */
console.log(path.basename("./1.path.js"));//1.path.js
console.log(path.basename("./1.path.js",".js"));//1.path
console.log(path.extname("./1.path.js"));//获取文件类型（扩展名）

//操作系统指定的文件分隔符  window \ linux /
console.log(path.sep);//   \
//环境变量路径分隔符
console.log(path.delimiter);//  ;
