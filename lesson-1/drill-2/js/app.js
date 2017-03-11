'use strict';

/*
add #js-submit
then use:
$('#js-submit').on({

$(document).ready(handleClicks);
$(function() {
    handleClicks();
});

*/

function handleClicks() {
    $(':submit').on({
        'click': function(event) {
            $('.js-results').empty();
            var countTo = $('#number-choice').val();
            for (var cnt = 0; cnt <= countTo; cnt++) {
                var myClass = '';
                var myText = '';
                if (cnt % 15 === 0) {
                    myClass = myText = 'fizzbuzz';
                }
                else if (cnt % 3 === 0) {
                    myClass = 'fizz';
                    myText = 'fizz';
                }
                else if (cnt % 5 === 0) {
                    myClass = 'buzz';
                    myText = 'buzz';
                }
                else {
                    myText = cnt;
                }
                $('.js-results').append
                    ('<div class="fizz-buzz-item '+myClass+'"><span>'+myText+'</span></div>');
            }
            event.preventDefault(); // prevent form submission
        }
    });
}

$(function() {
    handleClicks();
});
