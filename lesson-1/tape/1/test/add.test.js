/*
npm install tape --save-dev
npm i tap-spec tap-simple -D

node main.js | ./node_modules/.bin/tap-spec
ln -s node_modules/.bin ./bin
node main.js | bin/tap-spec

node main.js | bin/tap-simple
fails
tap-simple may be old.

npm i nodemon -g
nodemon main.js | bin/tap-spec
continuously runs unit tests
*/

// ./bin/tape test/**/*.test.js
// nodemon -x "./bin/tape test/**/*.test.js"

// nodemon -x "./bin/tape test/**/*.test.js | bin/tap-simple"
// will fail.

//use
// nodemon -x "./bin/tape test/**/*.test.js | bin/tap-spec"

/*
npm init
to create package.json
after tests, add:
*/
// "test": "./bin/tape test/**/*.test.js | bin/tap-spec",
// "tdd": "nodemon -x \"./bin/tape test/**/*.test.js | bin/tap-spec\"""

/*
npm test
npm run tdd

*/

'use strict';

var test = require('tape').test;
var add = require('../add');
test('The add method', function(t) {
    var actual = add(1, 2);
    var expected = 3;
    t.equal(actual, expected, 'add two numbers');
    t.end();
});
test('The add method again', function(t) {
    var actual = add(5, 9);
    var expected = 14;
    t.equal(actual, expected, 'add two numbers');
    t.end();
});
