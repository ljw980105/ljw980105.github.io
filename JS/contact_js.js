function opacityFx(num) {
    var $sm = $("#sm" + num.toString());
    $sm.mouseenter(function () {
        //$(this).fadeTo("fast",0.7);
        for (var i = 1; i < 6; i++) {
            if (i !== num) {
                $media = $("#sm" + i.toString());
                $media.fadeTo("fast", 0.4)
            }
        }
    });
    $sm.mouseleave(function () {
        //$(this).fadeTo("fast",1);
        for (var i = 1; i < 6; i++) {
            if (i !== num) {
                $media = $("#sm" + i.toString());
                $media.fadeTo("fast", 1)
            }
        }
    });
}

$(document).ready(function () {

    var num1 = $('#p_icon').offset().top;
    var num2 = $('#e_icon').offset().top;
    var num3 = $('#sub_sm').offset().top;

    // var num4 = $('#f00ter').offset().top;
    var num5 = $('#phone_mobile').offset().top;
    var num6 = $('#email_mobile').offset().top;
    var num7 = $("#social_media2").offset().top;

    // alert(num2);
    //$('#phone').hide();
    $('#title_').fadeTo(1, 0.001);
    $('#p_icon').fadeTo(1, 0.001);
    $('#e_icon').fadeTo(1, 0.001);
    $('#sub_sm').fadeTo(1, 0.001);
    $("#social_media2").fadeTo(1,0.001);
    // $("#f00ter").fadeTo(1,0.001);

    //$('#phone').fadeIn(1500);
    setTimeout(function () {
        $("#title_").fadeTo(1000, 1);
    }, 500);


    $("#email_mobile, #phone_mobile").fadeTo(1, 0.001);


    $(document).scroll(function () {
        var curr = $(this).scrollTop();

        if ($(window).width() > 550){
            // for desktop
            if (curr > num1 - 700) {
                $('#p_icon').fadeTo(2000, 1);
            }
            if (curr > num2 - 600) {
                $('#e_icon').fadeTo(2000, 1);
            }
            if (curr > num3 - 700) {
                $('#sub_sm').fadeTo(2000, 1);
            }
            if (curr > num7 - 700) {
                $('#social_media2').fadeTo(2000, 1);
            }
        }

        if ($(window).width() <= 550){
            //for mobile
            if (curr > num5 - 300) {
                $("#phone_mobile").fadeTo(1500, 1);
            }
            if (curr > num6 - 300) {
                $("#email_mobile").fadeTo(1500, 1);
            }
            if (curr > num3 - 500) {
                $('#sub_sm').fadeTo(1500, 1);
            }
            if (curr > num7 - 400) {
                $('#social_media2').fadeTo(2000, 1);
            }
        }

    });

    opacityFx(1);
    opacityFx(2);
    opacityFx(3);
    opacityFx(4);
    opacityFx(5);
});