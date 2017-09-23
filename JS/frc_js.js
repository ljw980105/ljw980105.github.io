function orderedFade(obj,order){
    order--;
    var delay = order * 500;

    setTimeout(function () {
        obj.fadeTo(1000,1);
    },delay);
}

$(document).ready(function () {
    $first = $("#text_wrap");
    $algo = $("#text_sec");
    $prgm = $("#descrip_txt");
    $vid = $("#vid_txt");
    $footer = $("#footer_container");
    $tribute = $("#footer_container2");

    $first.fadeTo(1,0.001);
    $algo.fadeTo(1,0.001);
    $prgm.fadeTo(1,0.001);
    $vid.fadeTo(1,0.001);
    $footer.fadeTo(1,0.001);
    $tribute.fadeTo(1,0.001);

    var num1 = $algo.offset().top;
    var num2 = $prgm.offset().top;
    var num3 = $vid.offset().top;
    var num4 = $footer.offset().top;
    var num5 = $tribute.offset().top;


    setTimeout(function () {
        $first.fadeTo(1000,1);
    },500);

    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > num1 - 600){
            orderedFade($algo,1);
        }
        if (curr > num2 - 600){
            orderedFade($prgm,1);
        }
        if (curr > num3 - 600){
            orderedFade($vid,1);
        }
        if (curr > num4 - 600){
            orderedFade($footer,1);
        }
        if (curr > num5 - 400){
            orderedFade($tribute,1);
        }
    });
});