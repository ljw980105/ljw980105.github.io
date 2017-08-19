/**
 * Created by Jing Wei Li on 8/19/2017.
 */

$(document).ready(function () {
    $reg_showcase = $("#reg_showcase");
    $img1 = $("#img1");
    $img2 = $("#img2");
    $img3 = $("#img3");
    $img4 = $("#img4");


    $reg_showcase.fadeTo(1,0.001);
    $img1.fadeTo(1,0.001);
    $img2.fadeTo(1,0.001);
    $img3.fadeTo(1,0.001);
    $img4.fadeTo(1,0.001);

    let num1 = $img1.offset().top;
    let num2 = $img2.offset().top;
    let num3 = $img3.offset().top;
    let num4 = $img4.offset().top;


    setTimeout(function () {
        $reg_showcase.fadeTo(1000,1);
    },500);

    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > num1 - 600){
            $img1.fadeTo(1000,1);
        }
        if (curr > num2 - 600){
            $img2.fadeTo(1000,1);
        }
        if (curr > num3 - 600){
            $img3.fadeTo(1000,1);
        }
        if (curr > num4 - 600){
            $img4.fadeTo(1000,1);
        }
    });
});
