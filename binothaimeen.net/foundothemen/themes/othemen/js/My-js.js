

/*
 * tooltip script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */



this.tooltip = function() {
    /* CONFIG */
    xOffset = 10;
    yOffset = 20;
    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result		
    /* END CONFIG */
    $(".tooltip").hover(function(e) {
        this.t = this.title;
        this.title = "";
        $("body").append("<p id='tooltip'>" + this.t + "</p>");
        $("#tooltip")
                .css("top", (e.pageY - xOffset) + "px")
                .css("left", (e.pageX + yOffset) + "px")
                .fadeIn("slow");
    },
            function() {
                this.title = this.t;
                $("#tooltip").remove();
            });
    $(".tooltip").mousemove(function(e) {
        $("#tooltip")
                .css("top", (e.pageY - xOffset) + "px")
                .css("left", (e.pageX + yOffset) + "px");
    });
};



// starting the script on page load
$(document).ready(function() {
    tooltip();

    /*	$("#top_menu ul li a:first") .css({
     "background-image":"url(images/home.png)",
     "background-repeat":"no-repeat",
     "width":"24",
     "height":"23px",
     "position":"absolute",
     "bottom":"20px"
     });*/
    $("#top_menu ul li:first").css({
        "padding-right": "14px",
    });
    $("#top_menu ul li:last").css({
        "background-image": "none"
    });

    $(".one_row_loop li a:odd").css({
        "background-color": "#fff",
    });

   
    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
    };
    $().UItoTop({easingType: 'easeOutQuart'});


    $('#slider').nivoSlider();


    $(".carouse1").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        auto: 3000,
        speed: 1000
    });
    $(".carouse2").jCarouselLite({
        btnNext: ".next1",
        btnPrev: ".prev1",
        auto: 3000,
        speed: 1000
    });
//    $('#news-container').vTicker({
//        speed: 500,
//        pause: 3000,
//        animation: 'fade',
//        mousePause: false,
//        showItems: 3
//    });
//    $('.ticker').vTicker(
//            'init', {speed: 400,
//        pause: 4000,
//        showItems: 1,
//        padding: 0}
//    );



    $("#showcase").awShowcase(
            {
                content_width: 198,
                content_height: 152,
                fit_to_parent: false,
                auto: true,
                interval: 3000,
                continuous: true,
                loading: true,
                tooltip_width: 200,
                tooltip_icon_width: 32,
                tooltip_icon_height: 32,
                tooltip_offsetx: 18,
                tooltip_offsety: 0,
                arrows: true,
                buttons: false,
                btn_numbers: true,
                keybord_keys: true,
                mousetrace: false, /* Trace x and y coordinates for the mouse */
                pauseonover: true,
                stoponclick: false,
                transition: 'hslide', /* hslide/vslide/fade */
                transition_delay: 0,
                transition_speed: 1000,
                show_caption: 'onload', /* onload/onhover/show */
                thumbnails: false,
                thumbnails_position: 'outside-last', /* outside-last/outside-first/inside-last/inside-first */
                thumbnails_direction: 'vertical', /* vertical/horizontal */
                thumbnails_slidex: 1, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
                dynamic_height: false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
                speed_change: true, /* Set to true to prevent users from swithing more then one slide at once. */
                viewline: false, /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
                custom_function: null /* Define a custom function that runs on content change */
            });

     $(".gallery:not(.slideshow) a[rel^='prettyPhoto']").prettyPhoto();
      


     

});


