/*
 The alert function creates a pop up window in the browser
 */
// var first = document.getElementById("contents");
// alert(first);

//toggles a class on and off. Notice the class selector is typed without the period
//$('.projects-button').toggleClass('active');

function erroneousZoom() {
    var $sm = $('#social_media a');
    $sm.hover(function () {
        $(this).animate({width: "+=20", height: "+=20"});
        //$(this).elevateZoom({easing : true});
    });
    $sm.on('mouseout', function () {
        $(this).animate({width: "-=20", height: "-=20"});
        //$(this).elevateZoom({easing : true});
    });
}

/*
Attempt to zoom while hovering
 */
function revealSM() {
     var $sm = $('#social_media a');
}

// primary syntax of jQuery
$(document).ready(function () { // wait until webpage is ready
    revealSM();
    var $contents = $('#nav');
    $contents.hide();
    //$contents.fadeIn(1000);
    $contents.slideToggle(500);
    

});
//main();
