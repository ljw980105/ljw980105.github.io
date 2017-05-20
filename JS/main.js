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
    // $sm.hover(function() {
    //     $(this).css("cursor", "pointer");
    //     $(this).toggle({
    //         effect: "scale",
    //         percent: "110%"
    //     },200);
    // }, function() {
    //     $(this).toggle({
    //         effect: "scale",
    //         percent: "100%"
    //     },200);
    // });

    // $sm.hide();
    // // $sm.slideToggle(500);
    // $sm.toggle("slide");

}

// primary syntax of jQuery
$(document).ready(function () { // wait until webpage is ready
    revealSM();
    var $contents = $('#contents');
    $contents.hide();
    //$contents.fadeIn(1000);
    $contents.slideToggle(1500);

});
//main();
