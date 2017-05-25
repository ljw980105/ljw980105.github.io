/*
 The alert function creates a pop up window in the browser
 */
// var first = document.getElementById("contents");
// alert(first);

//toggles a class on and off. Notice the class selector is typed without the period
//$('.projects-button').toggleClass('active');
//target a generic html element like p and li: $("div")
//compound selector : $('p, li').fadeTo('slow', 0);

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
 when mouse enters #sm, reduce everything else's opacity; when leaving,
 increase everything else's opacity
 */
function opacityFx(num){
    var $sm = $("#sm" + num.toString());
    $sm.mouseenter(function() {
        //$(this).fadeTo("fast",0.7);
        for (var i = 1; i < 6; i ++){
            if (i !== num){
                $media = $("#sm" + i.toString());
                $media.fadeTo("fast",0.4)
            }
        }
    });
    $sm.mouseleave(function() {
        //$(this).fadeTo("fast",1);
        for (var i = 1; i < 6; i ++){
            if (i !== num){
                $media = $("#sm" + i.toString());
                $media.fadeTo("fast",1)
            }
        }
    });
}

function lowerOpacity(string){
    var $proj = $(string);
    $proj.mouseenter(function () {
        $(this).fadeTo("fast",0.8)
    });
    $proj.mouseleave(function () {
        $(this).fadeTo("fast",1)
    });
}

// primary syntax of jQuery
$(document).ready(function () { // wait until webpage is ready
    var $nav = $('#nav');
    $nav.hide();
    $nav.slideToggle(500);

    // $intro = $("#intro");
    // $intro.hide();
    // $intro.slideToggle("slow");
    //$contents.fadeIn(1000);

    // var $sm = $('#sm1');
    lowerOpacity("#contents a");
    opacityFx(1);
    opacityFx(2);
    opacityFx(3);
    opacityFx(4);
    opacityFx(5);
});

