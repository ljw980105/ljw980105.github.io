/*
 Make the progress item bold if within range
 */
function progressFx(limit1, limit2, curr, target) {
    if (curr > limit1 && curr < limit2) {
        $(target).css("font-weight", "500");
    } else {
        $(target).css("font-weight", "300");
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

var createImage = function (src) {
    return '<img src="' + src + '" />';
};

function dummy() {

}

$(document).ready(function () {

    var nav_top = $("#nav").offset().top;
    var guide_top = $("#quick_guide").offset().top;
    var edu_top = $("#edu").offset().top;
    var exp_top = $("#experience").offset().top;
    var skl_top = $("#skills").offset().top;
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

    });
    animatedScroll("#p1", "#intro");
    animatedScroll("#p2", "#quick_guide");
    animatedScroll("#p3", "#edu");
    animatedScroll("#p4", "#experience");
    animatedScroll("#p5", "#skills");
    animatedScroll("#p6", "#awards");
    animatedScroll("#p7", "#nav");

    fadeFx("#left_arrow");
    fadeFx("#right_arrow");

    var imgArray = [];
    imgArray.push(createImage("images/skl1.png"));
    imgArray.push(createImage("images/skl4.png"));
    imgArray.push(createImage("images/skl1.png"));
    imgArray.push(createImage("images/skl4.png"));
    imgArray.push(createImage("images/skl1.png"));

    var i = 0;
    var $skl = $('#skill_content');
    var $button_left = $ ("#left_arrow");
    var $button_right = $ ("#right_arrow");

    $button_left.click(function () {
        $skl.fadeTo(300,0.001);
        i--;
        if (i < 0){i= imgArray.length-1;}
        $skl.html(imgArray[i]);
        // setTimeout(function () {
            $skl.fadeTo(300,1);
        // }, 300);
    });

    $button_right.click(function () {
        $skl.fadeTo(300,0.001);
        i++;
        if (imgArray.length == i - 1){i= 0;}
        $skl.html(imgArray[i]);
        // setTimeout(function () {
            $skl.fadeTo(300,1);
        // }, 300);
    });

    setInterval(function () {
        setTimeout(function () {// fade out, change image, fade in, delay
            $skl.fadeTo(1100,0.001);
        }, 4000);
        i++;
        if (imgArray.length == i - 1) {
            i = 0;
        }
        $skl.html(imgArray[i]);
        $skl.fadeTo(1000,1);
    },6000);


});