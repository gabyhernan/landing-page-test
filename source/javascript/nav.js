import $ from 'jquery';

$(document).ready(function() {
$('html').on('DOMMouseScroll mousewheel', function (e) {
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
  //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll down
    $( ".header").addClass( "hide-nav-bar" );
  } else {
    //scroll up
    $( ".header" ).removeClass( "hide-nav-bar" );
  }

});

});


