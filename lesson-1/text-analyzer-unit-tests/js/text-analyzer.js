'use strict';

/* global Data */
/* global Cleaner */
/* global App */

$(function() {
    var data = new Data();              // test data object
    var testData = data.getData(2);     // get the test data
    $('textarea').text(testData);       // copy test data to the textArea
    $('form').on({
        'submit': function(event) {         // on form submit
//            console.log("form submit");
            event.preventDefault();             // prevent form submission
            var text = $('textarea').val();     // get text to analyze

            var app = new App(new Cleaner());   // App object
            var results = app.main(text);       // execute main to get the statistics
//            console.log("results "+JSON.stringify(results));
//            console.log("1 :"+results["1"].wordCount);

            $('.js-stat-1').text(results["1"].wordCount);
            $('.js-stat-2').text(results["1"].uniqueWordCount);
            $('.js-stat-3').text(results["1"].averageWordLength);
            $('.js-stat-4').text(results["2"].averageWords);
            $('.text-report').removeClass('hidden');
        }
    });
});
