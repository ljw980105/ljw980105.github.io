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

$(document).ready(function () {
    var num2 = $('#email').offset().top;
    var num3 = $('#social_media').offset().top;
    var num4 = $('#footer').offset().top;
    // alert(num2);
    $('#phone').hide();
    $('#email').hide();
    $('#social_media').hide();
    $("#footer").hide();

    $('#phone').fadeIn(1500);
    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > num2-700) {
            $('#email').fadeIn(2000);
        }
        if (curr > num3-700) {
            $('#social_media').fadeIn(2000);
        }
        if (curr > num4-900) {
            $('#footer').fadeIn(2000);
        }
    });


    opacityFx(1);
    opacityFx(2);
    opacityFx(3);
    opacityFx(4);
    opacityFx(5);
});