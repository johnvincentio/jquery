function myFunc2(obj) {
  obj.foo = 'bizz';
  console.log(obj.foo);
}

var myVar = {foo: 'bar'};
console.log(myVar.foo); // => 'bar'
myFunc2(myVar); // => logs 'bizz'  — that's what we thought would happen!
console.log(myVar.foo); // => 'bizz'  — ruh roh! change inside function effected outside world!

