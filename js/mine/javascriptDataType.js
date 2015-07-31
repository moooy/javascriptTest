//���ݻ�������
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

//�������Ͷ�Ӧ��ʵ������������
var str = new Object("string");
var num = new Object(123); //�ȼ��� var num = new
var number = new Number(123);

//��������ʵ��������
function create(id,name){
    var obj = new Object();
    obj.id = id;
    obj.name = name;
    return obj;
}

//���캯��ʵ��������
function User(name,age){//���췽��
    this.name = name;//��������
    this.age = age;
}
User.prototype.addr = '�����人';//��ԭ�����������
User.prototype.show = function(){//��ԭ������ӷ���
    alert(this.name+'|'+this.age);
};
var user1 = new User('ZXC',22);//����ʵ��
var user2 = new User('CXZ',21);
/*user1.show();//����show()����
 user2.show();*/

//�������жϺ���
function isObject(value){
    return value === Object(value);
}
console.log(isObject(num));

//��������
/*
 \���󳤶�
 */
console.log(test.length);
