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

    var num1 = $('#p_icon').offset().top;
    var num2 = $('#e_icon').offset().top;
    var num3 = $('#sub_sm').offset().top;
    var num4 = $('#f00ter').offset().top;
    // alert(num2);
    //$('#phone').hide();
    $('#p_icon').fadeTo(1,0.001);
    $('#e_icon').fadeTo(1,0.001);
    $('#sub_sm').fadeTo(1,0.001);
    $("#f00ter").fadeTo(1,0.001);

    //$('#phone').fadeIn(1500);
    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > num1-700){
            $('#p_icon').fadeTo(2000,1);
        }
        if (curr > num2-600) {
            $('#e_icon').fadeTo(2000,1);
        }
        if (curr > num3-700) {
            $('#sub_sm').fadeTo(2000,1);
        }
        if (curr > num4-900) {
            $('#f00ter').fadeTo(2000,1);
        }
    });

    opacityFx(1);
    opacityFx(2);
    opacityFx(3);
    opacityFx(4);
    opacityFx(5);
});