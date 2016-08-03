/*
es6写法
生成器
 function*  ==>生成器的函数
* */
/*
function* say(){
    yield 'a';
    yield 'b';
}

var says = say();

console.log(says.next());
console.log(says.next());
console.log(says.next());
    */
function* say(words){
    for(var i =0,len= words.length;i<len;i++){
        yield words[i];
    }
}
var says = say(['hello','word']);

console.log(says.next());
console.log(says.next());
console.log(says.next());