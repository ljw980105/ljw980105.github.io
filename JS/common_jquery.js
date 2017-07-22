$(document).ready(function () { // wait until webpage is ready
    var $nav = $('#nav');
    $nav.hide();
    $nav.slideToggle(500);

    //CODE FOR SLIDING MOBILE NAV BAR
    var $mobile_nav = $("#mobile_nav");
    var $navicon = $("#navicon");
    $mobile_nav.hide();
    $navicon.click(function () {
        $mobile_nav.slideToggle();
    });
});