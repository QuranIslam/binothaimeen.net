function fixwidth(parent,src,trg,fix){$(parent).each(function(){var w=$(this).find(src).width();w=w+fix;$(this).find(trg).css("width",w+"px");});}
function fixheight(parent,src,trg,fix){$(parent).each(function(){var h=$(this).find(src).height();h=h+fix;if(h<0)
h=12;var t=$(this).find(trg).height();if(t<h){$(this).find(trg).css("height",h+"px");}else{t=t-fix;$(this).find(src).css("height",t+"px");}});}
function activemnue()
{if($('.getmachin').length!=0)
{var mach=$('.getmachin').attr('id');var dx=100;var maknon=["BenefitsNodal","BenefitsFundamentalist","jurisprudenceChoices","jurisprudenceRules","QuranSciences","SelectionsEducational"];if(maknon.indexOf(mach)>=0)
dx=5;switch(mach)
{case 'trees':dx=1;break;case 'public':dx=2;break;case 'books':dx=4;break;case 'sound':dx=3;break;case 'explanationVerse':dx=4;break;case 'Soundbites':dx=5;break;case 'ftawa':dx=3;break;case'Haramain':dx=3;break;case 'Speeches':dx=3;break;case 'Lectures':dx=3;break;case 'visible':dx=11;break;case 'BooksTranslated':dx=4;break;case 'Home':dx=0;break;}
var trlnk=$('li.topline').eq(dx);trlnk.find('a').first().addClass('active');}}
function scrollmovetools()
{$(window).scroll(function(){if($(window).scrollTop()>400)
{if($('.view-list-body-left-tools').length>0)
{$top=$(window).scrollTop();$tops=$top-400;$topsr=$tops+'px';$('.view-list-body-left-tools').css('top',$topsr);}}else if($(window).scrollTop()<400)
{if($('.view-list-body-left-tools').length>0)
{$('.view-list-body-left-tools').css('top','0px');}}
if($(window).scrollTop()==$(document).height()-$(window).height()){}});}
$(document).ready(function(){var pa=location.pathname.split("/");if(((pa.indexOf('create')>=0)||(pa.indexOf('update')>=0))&(pa.indexOf('watsapp')<0))
{var xrd=0;}else
{fixheight('.contentpage','.center-content','.right-content',4);}
$(".part-item").click(function(){var ndx=$(".part-item").index(this);var trg=$('.mat-parts').eq(ndx);$(window).scrollTo(trg);var time=$(this).attr("time");$('#jquery_jplayer').jPlayer("play",parseInt(time));});$(".mat-parts").click(function(){var ndx=$(".mat-parts").index(this);var trg=$('.part-item').eq(ndx);$(window).scrollTo("#mat-parts-t");});activemnue();scrollmovetools();var defaults={containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'};$().UItoTop({easingType:'easeOutQuart'});$('.messagealertclose').click(function(){$('.messagealerthtml').hide();});});