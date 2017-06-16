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

$(document).ready(function () {
    $("#img1 a").hide();
    $("#img2 a").hide();
    $("#img3 a").hide();
    $("#img4 a").hide();
    blurFx("#img1 img", "#img1 a", "#img1");
    blurFx("#img2 img", "#img2 a", "#img2");
    blurFx("#img3 img", "#img3 a", "#img3");
    blurFx("#img4 img", "#img4 a", "#img4");
});