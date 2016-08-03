'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//function Person(){
//    this.name =  'hello';
//    //return {name:'jht'};
//    return this;
//}
//var p = new Person();
//console.log(p.name);

//es6===

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = 6;
        this._hobbies = [];
    }

    _createClass(Person, [{
        key: 'getName',
        value: function getName() {
            console.log(this.name);
        }
    }, {
        key: 'hobby',
        get: function get() {
            return this._hobbies;
        },
        set: function set(hobby) {
            this._hobbies.push(hobby);
        }
    }]);

    return Person;
}();

var p = new Person("jth");
p.hobby = 'huoqi';
p.hobby = 'huoqi2';
console.log(p.hobby);
console.log(p);
p.getName();
