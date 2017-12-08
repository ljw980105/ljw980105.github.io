function hoverRotate(current,target){
    $current = $(current);
    $target = $(target);
    $current.mouseenter(function() {
        $target.addClass("rotate360") ;
    });
    $current.mouseleave(function() {
        $target.removeClass("rotate360");
    });
}

$(document).ready(function () {
    hoverRotate("#litec_github a", "#litec_github img");

    //reload the flickr div upon resizing
    $(window).resize(function () {
        $("#flickr_album").load(location.href + " #flickr_album");
    });
});