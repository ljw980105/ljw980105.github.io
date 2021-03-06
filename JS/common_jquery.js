function toggleFooter(title, contents){
    $(contents).hide();
    $(title).click(function () {
        $(contents).slideToggle();
    });
}

function diffPage(target,dest){
    $(target).click(function () {
        history.pushState({obj: "testing"},"adding_history",window.location);
        window.location.replace(dest);
    });
}

class PropObserver{
    //mimicking a property observer: only update the dropdown list when width is changed
    constructor(width){
        this.width = width;
        this.history = width;
    }

    updateHistory(new_width){
        this.history = this.width;
        this.width = new_width;
    }

    shouldUpdate(){
        // if (this.width !== this.history) alert("width shoulld update");
        if (this.width < 500 && this.history < 500){
            return false;
        } else {
            return this.width !== this.history;
        }
    }
}

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

    var screenwidth = $(window).width();
    var observer = new PropObserver(screenwidth);

    var isDropdownEnabled = false;
    if (!isDropdownEnabled && $(window).width() < 500) {
        toggleFooter("#navigation ul li h4", "#navigation .slideContents");
        toggleFooter("#projects_footer ul li h4", "#projects_footer .slideContents");
        toggleFooter("#social_media_footer ul li h4", "#social_media_footer .slideContents");
        toggleFooter("#graphics_footer ul li h4", "#graphics_footer .slideContents");
        isDropdownEnabled = true;
    }

    //make the logo clickable - return to home page
    diffPage("#mobile_logo img","./index.html");
    diffPage("#personal_logo img","./index.html");

    //the resize function is called every time the width of the screen is changed
    $(window).resize(function () {
        screenwidth = $(window).width();
        observer.updateHistory(screenwidth);
        if (observer.shouldUpdate()){
            if ($(window).width() > 500){
                $("#navigation .slideContents").show();
                $("#projects_footer .slideContents").show();
                $("#social_media_footer .slideContents").show();
                $("#graphics_footer .slideContents").show();
            } else {
                if (!isDropdownEnabled && $(window).width() < 500) {
                    toggleFooter("#navigation ul li h4", "#navigation .slideContents");
                    toggleFooter("#projects_footer ul li h4", "#projects_footer .slideContents");
                    toggleFooter("#social_media_footer ul li h4", "#social_media_footer .slideContents");
                    toggleFooter("#graphics_footer ul li h4", "#graphics_footer .slideContents");
                    isDropdownEnabled = true;
                }

                $("#navigation .slideContents").hide();
                $("#projects_footer .slideContents").hide();
                $("#social_media_footer .slideContents").hide();
                $("#graphics_footer .slideContents").hide();
            }
        }
    });
});