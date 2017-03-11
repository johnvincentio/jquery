'use strict';

var assert = require('assert');
var Data = require('../js/data');
var Cleaner = require('../js/cleaner');

var data = new Data();
var cleaner = new Cleaner();


var text = 'Ground \nControl to \n\nMajor Tom\n\n\nEnd';
assert.equal(text.length, 36);
var result = cleaner.removeNewlines(text);
assert.equal(result, 'Ground Control to Major TomEnd');
assert.equal(result.length, 30);

text = 'Ground Control to Major Tom\n ' +
'Ground Control to Major Tom\n Take your helmet\n';
assert.equal(cleaner.removeNewlines(text),
    'Ground Control to Major Tom Ground Control to Major Tom Take your helmet');


var result = cleaner.splitIntoSentences(data.getData(3));
assert.equal(result.length, 4);

assert.equal(result[0], 'fred bill fred');
assert.equal(result[1], 'jane janet jane');
assert.equal(result[2], 'john june');
assert.equal(result[3], 'david moses');


text = 'only one';
var result = cleaner.splitIntoSentences(text);
assert.equal(result.length, 1);
assert.equal(result, 'only one');
assert.equal(result[0], 'only one');
assert.equal(result[1], undefined);

text = 'only one again.';
result = cleaner.splitIntoSentences(text);
assert.equal(result.length, 1);
assert.equal(result, 'only one again');
assert.equal(result[0], 'only one again');
assert.equal(result[1], undefined);

text = 'only one plus a space. ';
result = cleaner.splitIntoSentences(text);
assert.equal(result.length, 1);
assert.equal(result, 'only one plus a space');
assert.equal(result[0], 'only one plus a space');
assert.equal(result[1], undefined);

text = 'alpha. beta? delta! All the same.';
result = cleaner.splitIntoSentences(text);
assert.equal(result.length, 4);
assert.equal(result[0], 'alpha');
assert.equal(result[1], 'beta');
assert.equal(result[2], 'delta');
assert.equal(result[3], 'All the same');


text = 'abcdefgh';
assert.equal(cleaner.removePeriod(text), 'abcdefgh');

text = 'abcd.efgh';
assert.equal(cleaner.removePeriod(text), 'abcdefgh');

text = 'abcd..efgh';
assert.equal(cleaner.removePeriod(text), 'abcdefgh');

text = 'abcd...efgh';
assert.equal(cleaner.removePeriod(text), 'abcdefgh');


text = 'abcdefgh';
assert.equal(cleaner.removeDoublePeriod(text), 'abcdefgh');

text = 'abcd.efgh';
assert.equal(cleaner.removeDoublePeriod(text), 'abcd.efgh');

text = 'abcd..efgh';
assert.equal(cleaner.removeDoublePeriod(text), 'abcd.efgh');

text = 'abcd...efgh';
assert.equal(cleaner.removeDoublePeriod(text), 'abcd.efgh');


text = 'abcdefgh';
assert.equal(cleaner.removeDoubleSpace(text), 'abcdefgh');

text = 'abcd efgh';
assert.equal(cleaner.removeDoubleSpace(text), 'abcd efgh');

text = 'abcd  efgh';
assert.equal(cleaner.removeDoubleSpace(text), 'abcd efgh');

text = 'abcd   efgh';
assert.equal(cleaner.removeDoubleSpace(text), 'abcd efgh');


text = data.getData(3);
assert.equal(cleaner.cleanText(text), 'fred bill fred. jane janet jane! john june? david moses');
assert.equal(cleaner.cleanerText(text), 'fred bill fred jane janet jane john june david moses');


text = 'abcd efgh 123456  7890';
assert.equal(cleaner.cleanText(text), 'abcd efgh 123456  7890');

text = 'abcd"de""fghj"""pqr';
assert.equal(cleaner.cleanText(text), 'abcddefghjpqr');

text = 'abcd(de(())fghj))(pqr';
assert.equal(cleaner.cleanText(text), 'abcddefghjpqr');

text = 'abcd+de++f+g+++hj';
assert.equal(cleaner.cleanText(text), 'abcddefghj');

text = 'abcd-de--f---hj';
assert.equal(cleaner.cleanText(text), 'abcd-de--f---hj');   // not really valid!

text = 'ab,c,df:g::hj;kmn;;pq;;;rs*t**v***w#x##y###z%a%%b%%%';
assert.equal(cleaner.cleanText(text), 'abcdfghjkmnpqrstvwxyzab');

/*
data = data.getData(4);
assert.equal(data, 'te"st " see');
assert.equal(cleaner.clean_1(data), 'test  see');

text = 'te"st " s?ee. more, less; higher : lower \nnewline, text';
assert.equal(cleaner.clean_2(text), 'test  see. more less higher  lower newline text');

text = 'te"st " s?ee. mo#re, le&ss; h$$$igher : lo=wer \nnewline, text';
assert.equal(cleaner.clean_4(text), 'test see. more less higher lower newline text');

text = 'te"st " s?ee. mo#re, le&ss; h$$$igher a23b609: lo=wer \nnewline, text...';
assert.equal(cleaner.clean_5(text), 'test see. more less higher a23b609 lower newline text...');

text = 'te"st fred.. " s?ee. mo#re, le&ss; h$$$igher a23b609: lo=wer \nnewline, text... chars.......';
assert.equal(cleaner.clean_6(text), 'test fred. see. more less higher a23b609 lower newline text. chars.');
*/
