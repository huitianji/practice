//function Person(){
//    this.name =  'hello';
//    //return {name:'jht'};
//    return this;
//}
//var p = new Person();
//console.log(p.name);

//es6===

class Person{
    constructor(name){
        this.name = name;
        this.age = 6;
        this._hobbies = [];
    }
    getName(){
        console.log(this.name);
        return this.name;
    }
    get hobby(){
        return this._hobbies;
    }
    set hobby(hobby){
        this._hobbies.push(hobby);
    }
}
//继承
class Student extends Person{
    constructor(name){
        super(name);//调用父类的构造函数
        this.name = name;
    }
    getStuNo(){
        console.log("123");
    }
    getName(){
        console.log(super.getName(),this.name);
    }
}

var p = new Person("jth");
p.hobby = 'huoqi';
p.hobby = 'huoqi2';
console.log(p.hobby)
console.log(p);
p.getName();

var student = new Student('jht');
student.getName();
student.getStuNo();