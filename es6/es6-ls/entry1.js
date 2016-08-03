//import {name,age,print} from './exp2.js';
//console.log(name,age);
//print("jth")

//默认导出。。export default
//很常用
import exp3 from "./exp3.js";
exp3('hello');
//【2】可以这么使用(如果把default关键字去掉 exp3中)
import * as exp3 from './exp3.js'