$(document).ready(function () { // wait until webpage is ready
    let $contents = $('#intro');
    let $name = $("#name");

    $name.fadeTo(1,0.001);
    $contents.fadeTo(1,0.001);

    setTimeout(function () {
        $name.fadeTo(1000,1);
        $contents.fadeTo(1000,1);
    },500);
});