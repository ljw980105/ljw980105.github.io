/*
 Make the progress item bold if within range
 */
function progressFx(limit1, limit2, curr, target) {
    if (curr > limit1 && curr < limit2) {
        $(target).css("font-family", "RobotoReg");
    } else {
        $(target).css("font-family", "Roboto");
    }
}

/*
 Animated scroll to certain divs triggered by a button click
 */
function animatedScroll(button, target) {
    $(button).click(function () {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 300);
    });
}

function fadeFx(div) {
    $div = $(div);
    $div.mouseenter(function () {
        $(this).fadeTo("fast", 0.4)
    });
    $div.mouseleave(function () {
        $(this).fadeTo("fast", 1)
    });
}

const createImage = function (src) {
    return '<img src="' + src + '" />';
};

function animateOne(){
    animatedScroll("#col1_item2 a","#skills");
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

$(document).ready(function () {

    var nav_top = $("#nav").offset().top;
    var guide_top = $("#quick_guide").offset().top;
    var edu_top = $("#edu").offset().top;
    var exp_top = $("#experience").offset().top;
    var skl_top = $("#skills").offset().top;
    var awards_top = $("#awards").offset().top;
    var foot_top = $("#standalone_footer").offset().top;
    var section_top = $("#progress").offset().top;
    $("#progress").hide();

    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > section_top + 50) {
            $("#progress").fadeIn(200);
            $("#progress").css("position", "fixed"); // adds the style if it doen't exist
            $("#progress").css("left", "0");
            $("#progress").css("top", "0");
            $("#progress").css("width", "100%");
            $("#progress").css("z-index", "99");
        } else {
            $("#progress").fadeOut(200);
        }

        progressFx(0, guide_top, curr, "#progress #p1");
        progressFx(guide_top, edu_top, curr, "#progress #p2");
        progressFx(edu_top, exp_top, curr, "#progress #p3");
        progressFx(exp_top, skl_top, curr, "#progress #p4");
        progressFx(skl_top, awards_top, curr, "#progress #p5");
        progressFx(awards_top, foot_top, curr, "#progress #p6");

    });
    animatedScroll("#p1", "#intro");
    animatedScroll("#p2", "#quick_guide");
    animatedScroll("#p3", "#edu");
    animatedScroll("#p4", "#experience");
    animatedScroll("#p5", "#skills");
    animatedScroll("#p6", "#awards");
    animatedScroll("#p7", "#nav");

    animatedScroll("#q1","#edu");
    animatedScroll("#q2","#experience");
    animatedScroll("#q3","#skills");

    diffPage("#q4","./Bio.html");
    diffPage("#q5","./Projects.html");
    diffPage("#q6","./Contacts.html");

    fadeFx("#left_arrow");
    fadeFx("#right_arrow");

    var $button_left = $("#left_arrow");
    var $button_right = $("#right_arrow");

    let slider = $('.bxslider').bxSlider({
        easing: "ease-in-out",
        auto:true,
        slideWidth: 2000,
    });

    $button_right.click(function(){
        slider.goToNextSlide();
        return false;
    });

    $button_left.click(function(){
        slider.goToPrevSlide();
        return false;
    });
});

