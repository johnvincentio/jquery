'use strict';

function handleClicks_1() {
  $('img').click(function(event) {
    console.log("this "+$(this));
      var clickedImage = $(this).attr('src');
      $('.hero img').attr('src', clickedImage);
  });
}

function handleClicks_2() {
  $('img').click(function() {
    console.log("this "+$(this));
      var clickedImage = $(this).attr('src');
      $('.hero img').attr('src', clickedImage);
  });
}

function handleClicks() {
  $('.thumbnail img').on({
     'click': function() {
         $('.hero img').attr('src', $(this).attr('src'));
     }
  });
}

$(document).ready(handleClicks);
