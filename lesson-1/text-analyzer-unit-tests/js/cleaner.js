'use strict';

function Cleaner() {
}

Cleaner.prototype.removeNewlines = function(text) {
    return text.replace(/\r?\n|\r/g,"");
};

Cleaner.prototype.splitIntoSentences = function(text) {
    var result = [];
    var separators = ['.', '?', '!'];
    var split = text.split(new RegExp('[' + separators.join('|') + ']', 'g'));          split.forEach(function(item) {
        if (item.trim().length > 0) {
            result.push(item.trim());
        }
    });
    return result;
};
Cleaner.prototype.removePeriod = function(text) {
    return text.replace(/[.]/g, "");
};
Cleaner.prototype.removeDoubleSpace = function(text) {
    return text.replace(/\s{2,}/g, " ");
};
Cleaner.prototype.removeDoublePeriod = function(text) {
    return text.replace(/\.{2,}/g, ".");
};
Cleaner.prototype.cleanText = function(text) {
    return text.replace(/[\"()+,:;*#%]/g, "");
};
Cleaner.prototype.cleanerText = function(text) {
    return text.replace(/[\"()+,:;*#%.?\!]/g, "");
};

/*
Cleaner.prototype.clean_1 = function(text) {
    return text.replace(/["]/g,"");
};
Cleaner.prototype.clean_2 = function(text) {
    return text.replace(/["?,:;\n]/g,"");
};

Cleaner.prototype.clean_4 = function(text) {
    return text.replace(/["?,:;#&$=\n]/g,"").replace(/\s{2,}/g," ");
};
Cleaner.prototype.clean_5 = function(text) {
    return text.replace(/[^A-Za-z0-9.\s]/g,"").replace(/\s{2,}/g," ");
};
Cleaner.prototype.clean_6 = function(text) {
    return text.replace(/[^A-Za-z0-9.\s]/g,"").replace(/\.{2,}/g,".").replace(/\s{2,}/g," ");
};

Cleaner.prototype.replaceWords = function(text) {
    return text.toLowerCase().replace(/it's/g,'it is').replace(/you're/g, 'you are')
    .replace(/there's/g, 'there is').replace(/god's/g, 'god')
    .replace(/i'm/g, 'i am').replace(/you've/g, 'you have');
};
*/

module.exports = Cleaner;
