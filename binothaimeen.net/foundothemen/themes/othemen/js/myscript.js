function fixwidth(parent, src, trg, fix) {
    $(parent).each(function() {
        var w = $(this).find(src).width();
        w = w + fix;
        $(this).find(trg).css("width", w + "px");
    });
}
// fix hieght 
function fixheight(parent, src, trg, fix) {

    $(parent).each(function() {
        var h = $(this).find(src).height();
        h = h + fix;
        if (h < 0)
            h = 12;
        var t = $(this).find(trg).height();
        if (t < h) {

            $(this).find(trg).css("height", h + "px");
        } else {

            t = t - fix;
            $(this).find(src).css("height", t + "px");
        }
    });
}

function activemnue()
{

    if ($('.getmachin').length != 0)
    {

        var mach = $('.getmachin').attr('id');

        var dx = 100;
        var maknon = ["BenefitsNodal", "BenefitsFundamentalist", "jurisprudenceChoices", "jurisprudenceRules", "QuranSciences", "SelectionsEducational"];
        if (maknon.indexOf(mach) >= 0)
            dx = 7;
        switch (mach)
        {

            case 'trees':
                dx = 0;
                break;
            case 'public':
                dx = 1;
                break;
            case 'books':
                dx = 2;
                break;
            case 'sound':
                dx = 3;
                break;
            case 'explanationVerse':
                dx = 4;
                break;
            case 'Soundbites':
                dx = 5;
                break;
            case 'ftawa':
                dx = 6;
                break;

            case'Haramain':
                dx = 8;
                break;
            case 'Speeches':
                dx = 9;
                break;
            case 'Lectures':
                dx = 10;
                break;
            case 'visible':
                dx = 11;
                break;
            case 'BooksTranslated':
                dx = 12;
                break;



        }



        var trlnk = $('li.topline').eq(dx);

//        



        trlnk.find('a').first().addClass('active');

    }
}

function scrollmovetools()
{
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400)
        {
            if ($('.view-list-body-left-tools').length > 0)
            {
                $top = $(window).scrollTop();
                $tops = $top - 400;
                $topsr = $tops + 'px';
                $('.view-list-body-left-tools').css('top', $topsr);
            }

        } else if ($(window).scrollTop() < 400)
        {
            if ($('.view-list-body-left-tools').length > 0)
            {

                $('.view-list-body-left-tools').css('top', '0px');
            }
        }
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {

        }
    });
}

$(document).ready(function() {
//     fixheight('.contentpage','.left-content-block','.right-content',50);


    var pa = location.pathname.split("/");
    if ((pa.indexOf('create') >= 0) || (pa.indexOf('update') >= 0))
    {
        var xrd =0;
//        timeout = setTimeout("fixheight('.contentpage', '.center-content', '.right-content', 4)", 5000);
    } else
    {
        fixheight('.contentpage', '.center-content', '.right-content', 4);
    }


    $(".part-item").click(function(){
        var ndx = $(".part-item").index(this);
        var trg = $('.mat-parts').eq(ndx);
        $(window).scrollTo(trg);
        var time = $(this).attr("time");
        $('#jquery_jplayer').jPlayer("play",parseInt(time) );
    });
    $(".mat-parts").click(function(){
        var ndx = $(".mat-parts").index(this);
        var trg = $('.part-item').eq(ndx);
        $(window).scrollTo("#mat-parts-t");
    });

    activemnue();
    scrollmovetools();


});

$(document).ready(function()
{
	$("#showcase2").awShowcase(
	{
		content_width:			475,
		content_height:			168,
		fit_to_parent:			false,
		auto:					true,
		interval:				4000,
		continuous:				true,
		loading:				true,
		tooltip_width:			200,
		tooltip_icon_width:		32,
		tooltip_icon_height:	32,
		tooltip_offsetx:		18,
		tooltip_offsety:		0,
		arrows:					true,
		buttons:				true,
		btn_numbers:			true,
		keybord_keys:			true,
		mousetrace:				false, /* Trace x and y coordinates for the mouse */
		pauseonover:			true,
		stoponclick:			false,
		transition:				'hslide', /* hslide/vslide/fade */
		transition_delay:		0,
		transition_speed:		500,
		show_caption:			'onload', /* onload/onhover/show */
		thumbnails:				false,
		thumbnails_position:	'outside-last', /* outside-last/outside-first/inside-last/inside-first */
		thumbnails_direction:	'vertical', /* vertical/horizontal */
		thumbnails_slidex:		1, /* 0 = auto / 1 = slide one thumbnail / 2 = slide two thumbnails / etc. */
		dynamic_height:			false, /* For dynamic height to work in webkit you need to set the width and height of images in the source. Usually works to only set the dimension of the first slide in the showcase. */
		speed_change:			true, /* Set to true to prevent users from swithing more then one slide at once. */
		viewline:				false, /* If set to true content_width, thumbnails, transition and dynamic_height will be disabled. As for dynamic height you need to set the width and height of images in the source. */
		custom_function:		null /* Define a custom function that runs on content change */
	});
});
$(".owl-demo2").owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 1000,
      singleItem : true,
	    autoPlay : 5000,
    stopOnHover : true,
	 navigation : false,
        rewindNav : true,
        scrollPerPage : false,

        pagination : false,

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
$("#owl-demo").owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 1000,
      singleItem : true,
	    autoPlay : 5000,
    stopOnHover : true,
    pagination : false,

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
