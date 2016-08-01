require('!style!css!./style.css');//css=>css-loader
document.write("hello");
/*。
require('./lib/jquery/cs.js');//正常来说路径这么写。。。路径太长了。。。可以考虑用别名
*/
//--->
/*利用别名之后可以这么来写
require("jquery");
*/
//如果要把jquery暴露出来
require('expose?$!jquery');
//
require("./people.js");

