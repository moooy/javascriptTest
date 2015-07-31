//数据基本类型
/**
 *
 * @type {Object}
 */
var test =new Object();
var prototypeId = "id";
var prototypeName = "name";
test[prototypeId] = "1";
test[prototypeName] = "testName";
console.log(test[prototypeId]);
console.log(test[prototypeName]);
/**
 *
 * @type {string}
 */
var strBase = "string";
/**
 *
 * @type {number}
 */
var numBase = 123;
/**
 *
 * @type {*[]}
 */
var arrayBase = ["string",123];
/**
 *
 * @type {boolean}
 */
var booleanBase = true;

//基本类型对应的实例化对象类型
var str = new Object("string");
var num = new Object(123); //等价于 var num = new
var number = new Number(123);

//工厂方法实例化对象
function create(id,name){
    var obj = new Object();
    obj.id = id;
    obj.name = name;
    return obj;
}

//构造函数实例化对象
function User(name,age){//构造方法
    this.name = name;//对象属性
    this.age = age;
}
User.prototype.addr = '湖北武汉';//在原型中添加属性
User.prototype.show = function(){//在原型中添加方法
    alert(this.name+'|'+this.age);
};
var user1 = new User('ZXC',22);//创建实例
var user2 = new User('CXZ',21);
/*user1.show();//调用show()方法
 user2.show();*/

//对象检测判断函数
function isObject(value){
    return value === Object(value);
}
console.log(isObject(num));

//对象属性
/*
 \对象长度
 */
console.log(test.length);
