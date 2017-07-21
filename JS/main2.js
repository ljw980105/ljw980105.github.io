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

function delayedFadeIn(name,time){
    setTimeout(function () {
        $(name).fadeTo(300,1);
    }, time);
}

function delayedFadeIn2(name,time){
    setTimeout(function () {
        $(name).fadeTo(220,1);
    }, time);
}

// primary syntax of jQuery
$(document).ready(function () { // wait until webpage is ready
    var $nav = $('#nav');
    $nav.hide();
    $nav.slideToggle(500);
    //$contents.fadeIn(1000);

    //CODE FOR SLIDING MOBILE NAV BAR
    var $mobile_nav = $("#mobile_nav");
    var $navicon = $("#navicon");
    $mobile_nav.hide();
    $navicon.click(function () {
        $mobile_nav.slideToggle();
    });


    $("#bg").fadeTo(1,0.001);
    $("#intro h1").fadeTo(1,0.001);
    $("#intro h2").fadeTo(1,0.001);
    for(var i = 1; i <= 5; i++){
        $("#sm"+i.toString()).fadeTo(1,0.001);
    }

    delayedFadeIn("#bg",500);
    delayedFadeIn("#intro h1",800);
    delayedFadeIn("#intro h2",1100);
    for(var j = 1; j <= 5; j++){
        delayedFadeIn2("#sm"+j.toString(),1200+220*j);
    }

    // var $sm = $('#sm1');
    lowerOpacity("#contents a");
    opacityFx(1);
    opacityFx(2);
    opacityFx(3);
    opacityFx(4);
    opacityFx(5);
});

