'use strict';

console.log("in app.js - 103");

var testData = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n';

function removeNewlines(text) {
    return text.replace(/\r?\n|\r/g,"");
}
function cleanerText(text) {
    return text.replace(/[\"()+,:;*#%.?\!]/g, "").replace(/\s{2,}/g, " ");
}
function cleanText(text) {
    return text.replace(/[\"()+,:;*#%]/g, "").replace(/\s{2,}/g, " ");
}
function getWords(text) {
    return cleanerText(text).split(' ');
}
function uniqueWordCount(words) {
    var unique = [];
    words.forEach(function(item) {
        if (item.length > 0 && unique.indexOf(item) === -1) {
            unique.push(item);
        }
    });
    return unique.length;
}
function averageWordLength(words) {
    return words.join("").length / words.length;
}
function splitIntoSentences(text) {
    var separators = ['.', '?', '!'];
    return text.split(new RegExp('[' + separators.join('|') + ']', 'g'));
}

/*
correct answers are:

Word count: 130
Unique word count: 86
Average word length: 4.223076923076923
Average sentence length: 130
*/
function handleReport(textArea) {
    var text1 = removeNewlines(textArea.trim().toLowerCase());  // clean the text
    var words = getWords(text1);                                // break up into words

    var sentences = splitIntoSentences(cleanText(text1));       // break up into sentences

    $('.js-stat-1').text(words.length);
    $('.js-stat-2').text(uniqueWordCount(words));
    $('.js-stat-3').text(averageWordLength(words));
    $('.js-stat-4').text(words.length / sentences.length);
    $('.text-report').removeClass('hidden');
}

$(function() {
    $('textarea').text(testData);       // copy test data to the textArea
    $('form').on({
        'submit': function(event) {         // on form submit
//            console.log("form submit");
            event.preventDefault();             // prevent form submission
            var text = $('textarea').val();     // get text to analyze
            handleReport(text);
        }
    });
});
