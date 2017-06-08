/*
Make the progress item bold if within range
 */
function progressFx(limit1, limit2, curr, target){
    if (curr > limit1 && curr < limit2){
        $(target).css("font-weight","500");
    } else {
        $(target).css("font-weight","300");
    }
}



$(document).ready(function () {

    var nav_top = $("#nav").offset().top;
    var guide_top = $("#quick_guide").offset().top;
    var edu_top = $("#edu").offset().top;
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

        progressFx(0,guide_top,curr,"#progress #p1");
        progressFx(guide_top,edu_top,curr,"#progress #p2");
    });

});