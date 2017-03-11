/*
npm init
npm install tape --save-dev
node test.js

to run in the browser:
npm i zuul --save-dev

    "test": "node test.js && zuul --ui tape --local 9966 -- test.js"

npm test

open url:
http://localhost:9966/__zuul

recreate node env:
rm -rf node_modules
npm install

*/

'use strict';

var test = require('tape').test;

var Bear = require('./index.js');

test('should growl', function(assert) {
    var bear = new Bear();
    var result = bear.growl();
    assert.equal(result, 'The any bear says grrr', 'empty bear');
    assert.end();
});

