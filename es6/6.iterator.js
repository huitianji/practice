/*
es5的写法
* 迭代器
* Iterator  迭代器
* */
'use strict';

function say(words){
     var i = 0;
    return {
        next(){
            return {
                value:words[i],
                done:i++>=words.length
            }
        }
    }
}


var says = say(['hello','word']);
console.log(says.next());//{value:'hello',done:false}
console.log(says.next());//{value:'word',done:false}
console.log(says.next());//{value:undefined,done:true}


