"use strict"
let name ="jth";
let age = 6;
//console.log(name + ' is ' + age);
//console.log(`${name} is ${age}`);
//console.log(`${name+1} is ${age+1}`);
var words = print`${name} is ${age}`;
console.log(words);
//function print(){
//    console.log(arguments)
//}
//{ '0': [ '', ' is ', '' ], '1': 'jth', '2': 6 }
function print(strings,...values){
    //console.log(strings[2]);
    //console.log(values[1])
    var str = '';
    for(var i=0;i<values.length;i++){
        str +=(strings[i]+values[i]);
    }
    return str.toUpperCase();
}
//[ '', ' is ', '' ]