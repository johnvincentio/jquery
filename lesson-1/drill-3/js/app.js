'use strict';

/*
function handleClicks() {
    $('.js-lightbulb').on({
        'click': function() {
            $('.bulb-on').removeClass('bulb-on');
            $(this).addClass('bulb-on');
        }
    });
}
*/

/*
$(document).ready(function() {
    $('.js-lightbulb').on({
        'click': function() {
            $('.bulb-on').removeClass('bulb-on');
            $(this).addClass('bulb-on');
        }
    });
});
*/

/*
$(document).ready(function() {
    $('.js-lightbulb').click(function() {
        $('.bulb-on').removeClass('bulb-on');
        $(this).addClass('bulb-on');
    });
});
*/

$(function() {
    $('.js-lightbulb').click(function() {
        $('.bulb-on').removeClass('bulb-on');
        $(this).addClass('bulb-on');
    });
});
