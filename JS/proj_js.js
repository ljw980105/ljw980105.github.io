/*
Pass in the objects to fade in, and their order.
 */
function orderedFade(obj,order){
    order--;
    let delay = order * 500;

    setTimeout(function () {
        obj.fadeTo(1000,1);
    },delay);
}

$(document).ready(function () {
    $typ = $("#typography");
    $item1 = $("#col1_item1");
    $item2 = $("#col2_item1");
    $item3 = $("#col1_item2");
    $item4 = $("#col2_item2");
    $item5 = $("#col1_item3");
    $item6 = $("#col2_item3");
    $item7 = $("#col1_item4");
    $item8 = $("#col2_item4");

    $typ.fadeTo(1,0.001);
    $item1.fadeTo(1,0.001);
    $item2.fadeTo(1,0.001);
    $item3.fadeTo(1,0.001);
    $item4.fadeTo(1,0.001);
    $item5.fadeTo(1,0.001);
    $item6.fadeTo(1,0.001);
    $item7.fadeTo(1,0.001);
    $item8.fadeTo(1,0.001);

    let num1 = $item1.offset().top;
    let num2 = $item3.offset().top;
    let num3 = $item5.offset().top;
    let num4 = $item7.offset().top;

    setTimeout(function () {
        $typ.fadeTo(1000,1);
    },500);

    $(document).scroll(function () {
        let curr = $(this).scrollTop();
        if (curr > num1 - 600){
            orderedFade($item1,1);
            orderedFade($item2,2);
        }
        if (curr > num2 - 600){
            orderedFade($item3,1);
            orderedFade($item4,2);
        }
        if (curr > num3 - 600){
            orderedFade($item5,1);
            orderedFade($item6,2);
        }
        if (curr > num4 - 600) {
            orderedFade($item7,1);
            orderedFade($item8,2);
        }
    });
});