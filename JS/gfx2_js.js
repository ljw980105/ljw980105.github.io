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

function orderedFade(obj,order){
    var delay = order * 300;

    setTimeout(function () {
        $(obj).fadeTo(300,1);
    },delay);
}

function orderedSlideUp(obj,order){
    var delay = order * 300;

    setTimeout(function () {
        $(obj).animate({marginTop:"0px"},300);
    },delay);
}

function orderedSlideUp2(obj,order){
    var delay = order * 300;

    setTimeout(function () {
        $(obj).animate({marginTop:"0px"},300);
    },delay);
}

function orderedSlideUp3(obj,order){
    var delay = order * 300;

    setTimeout(function () {
        $(obj).animate({marginTop:"0px"},300);
    },delay);
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

    //complex ordered fade-in and slide up animation
    if ($(window).width() > 1023){
        const level1 = $("#img1 img").offset().top - 500;
        const level2 = $("#tapeImg").offset().top - 500;
        const level3 = $("#behance").offset().top - 500;
        const level1_contents = ["#img1","#img2","#img3"];
        const level2_contents = ["#img4","#tapeFace","#gotg"];
        const level3_contents = ["#img5","#behance","#flickr"];
        level1_contents.forEach(function (e) {
            $(e).fadeTo(1,0.001);
            $(e).animate({marginTop:"30px"},1);
        });
        level2_contents.forEach(function (e) {
            $(e).fadeTo(1,0.001);
            $(e).animate({marginTop:"60px"},1);
        });
        level3_contents.forEach(function (e) {
            $(e).fadeTo(1,0.001);
            $(e).animate({marginTop:"90px"},1);
        });

        $(document).scroll(function () {
            var curr = $(this).scrollTop();
            if (curr > level1){
                orderedFade(level1_contents[0],0);
                orderedSlideUp(level1_contents[0],0);
                orderedFade(level1_contents[1],1);
                orderedSlideUp(level1_contents[1],1);
                orderedFade(level1_contents[2],2);
                orderedSlideUp(level1_contents[2],2);
            }
            if (curr > level2){
                orderedFade(level2_contents[0],0);
                orderedFade(level2_contents[1],1);
                orderedFade(level2_contents[2],2);
                orderedSlideUp2(level2_contents[0],0);
                orderedSlideUp2(level2_contents[1],1);
                orderedSlideUp2(level2_contents[2],2);
            }
            if (curr > level3){
                orderedFade(level3_contents[0],0);
                orderedSlideUp3(level3_contents[0],0);
                orderedFade(level3_contents[1],1);
                orderedSlideUp3(level3_contents[1],1);
                orderedFade(level3_contents[2],2);
                orderedSlideUp3(level3_contents[2],2);
            }
        });
    }

});

