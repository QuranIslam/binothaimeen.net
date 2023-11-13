var featuredcontentglider={leftrightkeys:[37,39],csszindex:100,ajaxloadingmsg:'<b>Fetching Content. Please wait...</b>',glide:function(config,showpage,isprev){var selected=parseInt(showpage)
if(selected>=config.$contentdivs.length){alert("No content exists at page "+(selected+1)+"! Loading 1st page instead.")
selected=0}
var $target=config.$contentdivs.eq(selected)
if(config.$togglerdiv.attr('lastselected')==null||parseInt(config.$togglerdiv.attr('lastselected'))!=selected){var $selectedlink=config.$toc.eq(selected)
config.nextslideindex=(selected<config.$contentdivs.length-1)?selected+1:0
config.prevslideindex=(selected==0)?config.$contentdivs.length-1:selected-1
config.$next.attr('loadpage',config.nextslideindex+"pg")
config.$prev.attr('loadpage',config.prevslideindex+'pg')
var startpoint=(isprev=="previous")?-config.startpoint:config.startpoint
$target.css(config.leftortop,startpoint).css("zIndex",this.csszindex++)
var endpoint=(config.leftortop=="left")?{left:0}:{top:0}
$target.animate(endpoint,config.speed)
config.$toc.removeClass('selected')
$selectedlink.addClass('selected')
config.$togglerdiv.attr('lastselected',selected+'pg')}},getremotecontent:function($,config){config.$glider.html(this.ajaxloadingmsg)
$.ajax({url:config.remotecontent,error:function(ajaxrequest){config.$glider.html('Error fetching content.<br />Server Response: '+ajaxrequest.responseText)},success:function(content){config.$glider.html(content)
featuredcontentglider.setuptoggler($,config)}})},aligncontents:function($,config){config.$contentdivs=$("#"+config.gliderid+" ."+config.contentclass)
config.$contentdivs.css(config.leftortop,config.startpoint).css({height:config.$glider.height(),visibility:'visible'})},setuptoggler:function($,config){this.aligncontents($,config)
config.$togglerdiv.hide()
config.$toc.each(function(index){$(this).attr('pagenumber',index+'pg')
if(index>(config.$contentdivs.length-1))
$(this).css({display:'none'})})
var $nextandprev=$("#"+config.togglerid+" .next, #"+config.togglerid+" .prev")
$nextandprev.click(function(event){featuredcontentglider.glide(config,this.getAttribute('loadpage'),this.getAttribute('buttontype'))
event.preventDefault()})
config.$toc.click(function(event){featuredcontentglider.glide(config,this.getAttribute('pagenumber'))
event.preventDefault()})
config.$togglerdiv.fadeIn(1000,function(){featuredcontentglider.glide(config,config.selected)
if(config.autorotate==true){config.stepcount=0
config.totalsteps=config.$contentdivs.length*config.autorotateconfig[1]
featuredcontentglider.autorotate(config)}})
config.$togglerdiv.click(function(){featuredcontentglider.cancelautorotate(config.togglerid)})
if(this.leftrightkeys.length==2){$(document).bind('keydown',function(e){featuredcontentglider.keyboardnav(config,e.keyCode)})}},autorotate:function(config){var rotatespeed=config.speed+config.autorotateconfig[0]
window[config.togglerid+"timer"]=setInterval(function(){if(config.totalsteps>0&&config.stepcount>=config.totalsteps){clearInterval(window[config.togglerid+"timer"])}
else{featuredcontentglider.glide(config,config.nextslideindex,"next")
config.stepcount++}},rotatespeed)},cancelautorotate:function(togglerid){if(window[togglerid+"timer"])
clearInterval(window[togglerid+"timer"])},keyboardnav:function(config,keycode){if(keycode==this.leftrightkeys[0])
featuredcontentglider.glide(config,config.prevslideindex,"previous")
else if(keycode==this.leftrightkeys[1])
featuredcontentglider.glide(config,config.nextslideindex,"next")
if(keycode==this.leftrightkeys[0]||keycode==this.leftrightkeys[1])
featuredcontentglider.cancelautorotate(config.togglerid)},getCookie:function(Name){var re=new RegExp(Name+"=[^;]+","i")
if(document.cookie.match(re))
return document.cookie.match(re)[0].split("=")[1]
return null},setCookie:function(name,value){document.cookie=name+"="+value},init:function(config){jQuery(document).ready(function($){config.$glider=$("#"+config.gliderid)
config.$togglerdiv=$("#"+config.togglerid)
config.$toc=config.$togglerdiv.find('.toc')
config.$next=config.$togglerdiv.find('.next')
config.$prev=config.$togglerdiv.find('.prev')
config.$prev.attr('buttontype','previous')
var selected=(config.persiststate)?featuredcontentglider.getCookie(config.gliderid):config.selected
config.selected=(isNaN(parseInt(selected)))?config.selected:selected
config.leftortop=(/up/i.test(config.direction))?"top":"left"
config.heightorwidth=(/up/i.test(config.direction))?config.$glider.height():config.$glider.width()
config.startpoint=(/^(left|up)/i.test(config.direction))?-config.heightorwidth:config.heightorwidth
if(typeof config.remotecontent!="undefined"&&config.remotecontent.length>0)
featuredcontentglider.getremotecontent($,config)
else
featuredcontentglider.setuptoggler($,config)
$(window).bind('unload',function(){config.$togglerdiv.unbind('click')
config.$toc.unbind('click')
config.$next.unbind('click')
config.$prev.unbind('click')
if(config.persiststate)
featuredcontentglider.setCookie(config.gliderid,config.$togglerdiv.attr('lastselected'))
config=null})})}}