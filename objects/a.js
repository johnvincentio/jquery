var myVar = 'foo';

function myFunc(myVar) {
  myVar += ' myFunc was here';
  console.log('`myVar` inside of `myFunc` is "' + myVar + '"');
}

myFunc(myVar); // => '`myVar` inside of `myFunc` is "foo myFunc was here"''
console.log(myVar); // => 'foo'

