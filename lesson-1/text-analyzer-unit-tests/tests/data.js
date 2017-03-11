'use strict';

var assert = require('assert');
var Data = require('../js/data');

var data = new Data();

assert.equal(data.getData(), '');

assert.equal(data.getData(4), 'te"st " see');
