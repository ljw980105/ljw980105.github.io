
$(document).ready(function () {

    var section_top = $("#progress").offset().top;
    $("#progress").hide();

    $(document).scroll(function () {
        var curr = $(this).scrollTop();
        if (curr > section_top + 50) {
            $("#progress").fadeIn(500);
            $("#progress").css("position", "fixed"); // adds the style if it doen't exist
            $("#progress").css("left", "0");
            $("#progress").css("top", "0");
            $("#progress").css("width", "100%");
        } else {
            // $("#progress").css("position", "");
            // $("#progress").css("left", "");
            // $("#progress").css("top", "");
            // $("#progress").css("width", "");
            $("#progress").fadeOut(500);
        }
    });

});