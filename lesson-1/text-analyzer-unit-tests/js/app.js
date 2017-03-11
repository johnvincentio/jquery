'use strict';

/*
var Cleaner = require('./cleaner');
cannot use here because in browser mode I only have a mocked up require function.
*/

function App(cleaner) {
    this.cleaner = cleaner;
}

App.prototype.main = function(text) {
    return {
        '1': this.calculateStatistics(text),
        '2': this.sentenceStatistics(text)
    };
};

App.prototype.sentenceStatistics = function(text) {
    var s1 = this.cleaner.removeNewlines(text.toLowerCase());
    var s2 = this.cleaner.cleanText(s1);
    var s3 = this.cleaner.removeDoublePeriod(s2);
    var s4 = this.cleaner.removeDoubleSpace(s3);
    var sentences = this.cleaner.splitIntoSentences(s4);

    var totalWords = 0;
    sentences.forEach(function(sentence) {
        totalWords += sentence.trim().split(' ').length;
    });
    return {
        'sentences': sentences.length,
        'totalWords': totalWords,
        'averageWords': totalWords / sentences.length
    };
};

App.prototype.calculateStatistics = function(text) {      // string of text
    var s1 = this.cleaner.removeNewlines(text.toLowerCase());
    var s2 = this.cleaner.cleanerText(s1);
    var s3 = this.cleaner.removePeriod(s2);
    var s4 = this.cleaner.removeDoubleSpace(s3);
    var words = s4.trim().split(' ');

    var results = [];
    var wordCount = 0;
    var charTotal = 0;
    words.forEach(function(wordsItem) { // make a word lisr
        wordCount++;
        charTotal += wordsItem.length;
        var match = results.findIndex(function(resultItem) {
            return resultItem.word === wordsItem;
        });
        if (match === -1) {
            results.push({
                word: wordsItem,        // add word not already in list
                count: 1                // initialize count to 1.
            });
        }
        else {
            results[match].count++;     // word already in list thus increment count
        }
    });
    results.sort(function(a, b) {    // make a list of sorted words for debugging purposes.
        if (a.word < b.word) return -1;     // sort by word and then by higher count
        if (a.word > b.word) return 1;
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });

    var statistics = {
        'wordCount': wordCount,
        'uniqueWordCount': results.length,
        'charTotal': charTotal,
        'averageWordLength': charTotal / wordCount,
        'results': results          // returned for unit test purposes.
    };
    return statistics;
};

module.exports = App;
