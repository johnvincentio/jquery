'use strict';

var assert = require('assert');
var Data = require('../js/data');
var Cleaner = require('../js/cleaner');
var App = require('../js/app');

var data = new Data();
var cleaner = new Cleaner();
var app = new App(cleaner);

/*
correct answers are:

Word count: 130
Unique word count: 86
Average word length: 4.223076923076923
Average sentence length: 130
*/

function test_1() {
    var testData = data.getData(2);

    var results = app.calculateStatistics(testData);
//    console.log("results "+JSON.stringify(results));
    assert.equal(results.wordCount, 130);
    assert.equal(results.uniqueWordCount, 86);
    assert.equal(results.averageWordLength, 4.223076923076923);

    results = app.sentenceStatistics(testData);
//    console.log("results "+JSON.stringify(results));
    assert.equal(results.sentences, 1);
    assert.equal(results.totalWords, 130);
    assert.equal(results.averageWords, 130);

    results = app.main(testData);
    assert.equal(results["1"].wordCount, 130);
    assert.equal(results["1"].uniqueWordCount, 86);
    assert.equal(results["1"].averageWordLength, 4.223076923076923);
    assert.equal(results["2"].averageWords, 130);
}

/*
'fred bill fred. jane janet jane! john june? david moses';
*/
function test_2() {
    var testData = data.getData(3);

    var results = app.calculateStatistics(testData);
//    console.log("results "+JSON.stringify(results));
    assert.equal(results.wordCount, 10);
    assert.equal(results.uniqueWordCount, 8);
    assert.equal(results.averageWordLength, 4.3);

    results = app.sentenceStatistics(testData);
//    console.log("results "+JSON.stringify(results));
    assert.equal(results.sentences, 4);
    assert.equal(results.totalWords, 10);
    assert.equal(results.averageWords, 2.5);

    results = app.main(testData);
    assert.equal(results["1"].wordCount, 10);
    assert.equal(results["1"].uniqueWordCount, 8);
    assert.equal(results["1"].averageWordLength, 4.3);
    assert.equal(results["2"].averageWords, 2.5);
}

test_1();
test_2();
