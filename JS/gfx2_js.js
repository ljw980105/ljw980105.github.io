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
        $text.fadeOut(500);
        $proj.removeClass("blur");
    });
}

function zoomFx(to_change) {
    let $proj = $(to_change);
    $proj.mouseenter(function () {
        $proj.addClass("zoom");
    });
    // only reverse the effect when leaving entire thing
    $proj.mouseleave(function () {
        $proj.removeClass("zoom");
    });
}

/*
  by default window.location.replace does not update history.
  using history.pushState() adds history manually. This is a html5 feature
 */
function diffPage(target,dest){
    $(target).click(function () {
        history.pushState({obj: "testing"},"adding_history",window.location);
        window.location.replace(dest);
    });
}

function ajdustWindow(){
    if($(window).width() <= 1550 && $(window).width() >= 1500){
        blurFx("#img1 img", "#img1 a", "#img1");
        blurFx("#img2 img", "#img2 a", "#img2");
        blurFx("#img3 img", "#img3 a", "#img3");
        blurFx("#img4 img", "#img4 a", "#img4");
        blurFx("#tapeFace img","#tapeFaceAnchor","#tapeFace");
        blurFx("#gotg img","#gotgAnchor","#gotg");
        blurFx("#img5 img","#img5 a", "#img5");
    }

    //only apply the diff page effect with certain width
    if($(window).width() > 1550 || $(window).width() < 1500){
        diffPage("#img1 img", "https://www.behance.net/gallery/47281675/2026-Time-Capsule");
        diffPage("#img4 img","https://www.behance.net/gallery/47687973/Robotics-Recruitment-Poster");
        diffPage("#img2 img","./Regular_Art.html");
        diffPage("#img3 img", "https://www.behance.net/gallery/52343049/RPI-Class-of-2021-Sticker-Design");
        diffPage("#tapeFace img", "https://www.behance.net/gallery/57032339/Tape-Face-Live");
        diffPage("#gotg img", "https://www.behance.net/gallery/57032327/Guardian-of-the-Galaxy-Poster-Design");
        diffPage("#img5 img","https://www.behance.net/gallery/57666401/Walk-the-Moon-Graphic");

        zoomFx("#img1 img");
        zoomFx("#img2 img");
        zoomFx("#img3 img");
        zoomFx("#img4 img");
        zoomFx("#gotg img");
        zoomFx("#tapeImg");
        zoomFx("#img5 img");
    }

    if($(window).width() <= 500){
        zoomFx("#img1 img");
        zoomFx("#img2 img");
        zoomFx("#img3 img");
        zoomFx("#img4 img");
        zoomFx("#gotg img");
        zoomFx("#tapeImg");
        zoomFx("#img5 img");
    }
}

$(document).ready(function () {
    $("#img1 a").hide();
    $("#img2 a").hide();
    $("#img3 a").hide();
    $("#img4 a").hide();
    $("#img5 a").hide();
    $("#gotgAnchor").hide();
    $("#tapeFaceAnchor").hide();
    $("#showcase").fadeTo(1,0.001);

    setTimeout(function () {
        $("#showcase").fadeTo(1000,1);
    },500);

    ajdustWindow();

    $(window).resize(function () {
        ajdustWindow();
    });

});

