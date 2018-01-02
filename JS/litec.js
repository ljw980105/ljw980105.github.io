
/*
When hovering over an object, rotate another object 360 deg
 */
function hoverRotate(current,target){
    $current = $(current);
    $target = $(target);
    $current.mouseenter(function() {
        $target.addClass("rotate360") ;
    });
    $current.mouseleave(function() {
        $target.removeClass("rotate360");
    });
}

/*
Animated scroll to certain divs triggered by a button click
*/
function animatedScroll(button, target) {
    $(button).click(function () {
        $('html, body').animate({
            scrollTop: $(target).offset().top - 110
        }, 1000);
    });
}


$(document).ready(function () {
    hoverRotate("#litec_github a", "#litec_github img");
    var count = 0;
    var count_algo = 0;

    //initialize the fade-fx variables
    $pwm_wrapper = $("#pwm_wrapper");
    $algo_wrapper = $("#algo_wrapper");

    let num1 = $pwm_wrapper.offset().top;
    let num2 = $algo_wrapper.offset().top;

    //initialize gif player
    $pwm = $(".pwm");
    $pwm.gifplayer();
    $algo = $(".algo");
    $algo.gifplayer();

    animatedScroll("#litec_github a","#yt");
    animatedScroll("#gond","#yt");

    //reload the flickr div upon resizing
    $(window).resize(function () {
        $("#flickr_album").load(location.href + " #flickr_album");
    });

    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        //alert(curr);
        if (curr > num1 && count < 1){
            $pwm.gifplayer('play');
            setTimeout(function () {
                $pwm.gifplayer('stop');
            },3000);
            count ++;
        }
       if (curr > num1 && count_algo < 1){
            $algo.gifplayer('play');
            setTimeout(function () {
                $algo.gifplayer('stop');
            },3000);
            count_algo ++;
        }
    });
});