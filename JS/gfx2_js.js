/*
 Provide 3 arguments: the image to blur, the overlaying text, and the entire div containing these two.
 */
function blurFx(to_change, text, whole_div) {
    var $proj = $(to_change);
    var $text = $(text);
    var $whole = $(whole_div);
    $proj.mouseenter(function () {
        $proj.addClass("blur");
        $text.fadeIn(500);
    });
    $text.mouseenter(function () {
        $proj.addClass("blur");
        $text.show();
    });
    // only reverse the effect when leaving entire thing
    $whole.mouseleave(function () {
        $text.fadeOut(500);;
        $proj.removeClass("blur");
    });
}

function diffPage(target,dest){
    $(target).click(function () {
        window.location.replace(dest);
    });
}

$(document).ready(function () {
    $("#img1 a").hide();
    $("#img2 a").hide();
    $("#img3 a").hide();
    $("#img4 a").hide();
    $("#showcase").fadeTo(1,0.001);

    setTimeout(function () {
        $("#showcase").fadeTo(1000,1);
    },500);
    blurFx("#img1 img", "#img1 a", "#img1");
    blurFx("#img2 img", "#img2 a", "#img2");
    blurFx("#img3 img", "#img3 a", "#img3");
    blurFx("#img4 img", "#img4 a", "#img4");

    //only apply the diff page effect with certain width
    if($(window).width() > 1550 || $(window).width() < 1500){
        diffPage("#img1 img", "https://www.behance.net/gallery/47281675/2026-Time-Capsule");
        diffPage("#img4 img","https://www.behance.net/gallery/47687973/Robotics-Recruitment-Poster");
        diffPage("#img2 img","./Regular_Art.html");
        diffPage("#img3 img", "https://www.behance.net/gallery/52343049/RPI-Class-of-2021-Sticker-Design");
    }
});

