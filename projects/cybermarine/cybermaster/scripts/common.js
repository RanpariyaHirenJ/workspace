// JavaScript Document

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

setInterval(function() { 
$('.fadein-img').fadeIn(2000).delay(2000).fadeOut(2000).delay(2000); 
});

$(function() {
	var winWidth;
	var winHeight;
	var containerwidtht;
	var containerHeight;
	var totalWidth;
	var totalHeight;
	
	winWidth = $(window).width();
	winHeight = $(window).height();
	
	containerwidtht = $(".container").width();
	containerHeight = $(".container").height();
	
	totalWidth = winWidth - containerwidtht ;
	totalWidth = totalWidth / 2 ;
	
	totalHeight = winHeight - containerHeight ;
	totalHeight = totalHeight / 2.5 ;
	
    $('.wrapper').css({
        'position' : 'absolute',
		'left' :totalWidth, 
        'top' : totalHeight,
    });
});


$(function() {
	var winWidth;
	var winHeight;
	var containerwidtht;
	var containerHeight;
	var totalWidth;
	var totalHeight;
	
	winWidth = $(window).width();
	winHeight = $(window).height();
	
	containerwidtht = $(".full-slide").width();
	containerHeight = $(".full-slide").height();
	
	totalWidth = winWidth - containerwidtht ;
	totalWidth = totalWidth / 2 ;
	
	totalHeight = winHeight - containerHeight ;
	totalHeight = totalHeight / 2.5 ;
	
    $('.center').css({
        'position' : 'absolute',
		/*'left' :totalWidth, */
        'top' : totalHeight,
		'bottom' : totalHeight,
    });
});

		$('.sub-menu li a').click(function(){
		$(".sub-menu").css("display", "none");
		$(this).parent().parent().parent().find('.submenu-button').removeClass('submenu-opened');
		});
		
		$('.sub-menu li').click(function(){
		$(".sub-menu").css("display", "none");
		$(this).parent().parent().parent().find('.submenu-button').removeClass('submenu-opened');
		});
		
		$('.button').click(function(){
		$(".sub-menu").css("display", "none");
		$(this).next().children().find('.submenu-button').removeClass('submenu-opened');
		});
		
		
$("#arrowRotate").click(function() { 
      var _this = $(this);
      var current = _this.attr("src");
      var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);   
});  
(function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   
      $(this).find(".sub-menu").on('click', function(){
     $(".button").toggleClass('menu-opened');
     var mainmenu = $(".button").next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
	 
/*       $('.submenu-button').toggleClass('submenu-opened');
       if ($('.submenu-button').siblings('ul').hasClass('open')) {
         $('.submenu-button').siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $('.submenu-button').siblings('ul').addClass('open').slideToggle();
       }*/
	 
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1023;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);
		
   // alert($(".full-slide").width());
	var width = $(".full-slide").width();
	if(width >= 950){
			/**
 * fullPage 2.5.6
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(b){b.fn.fullpage=function(c){function sa(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=c.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function ta(){b("body").append('<div id="fp-nav"><ul></ul></div>');
h=b("#fp-nav");h.css("color",c.navigationColor);h.addClass(c.navigationPosition);for(var a=0;a<b(".fp-section").length;a++){var d="";c.anchors.length&&(d=c.anchors[a]);var d='<li><a href="#'+d+'"><span></span></a>',e=c.navigationTooltips[a];void 0!==e&&""!=e&&(d+='<div class="fp-tooltip '+c.navigationPosition+'">'+e+"</div>");d+="</li>";h.find("ul").append(d)}}function U(){b(".fp-section").each(function(){var a=b(this).find(".fp-slide");a.length?a.each(function(){z(b(this))}):z(b(this))});b.isFunction(c.afterRender)&&
c.afterRender.call(this)}function V(){var a;if(!c.autoScrolling||c.scrollBar){var d=b(window).scrollTop(),e=0,f=Math.abs(d-b(".fp-section").first().offset().top);b(".fp-section").each(function(a){var c=Math.abs(d-b(this).offset().top);c<f&&(e=a,f=c)});a=b(".fp-section").eq(e)}if((!c.autoScrolling||c.scrollBar)&&!a.hasClass("active")){H=!0;var g=b(".fp-section.active"),n=g.index(".fp-section")+1,l=I(a),A=a.data("anchor"),h=a.index(".fp-section")+1,J=a.find(".fp-slide.active");if(J.length)var m=J.data("anchor"),
k=J.index();a.addClass("active").siblings().removeClass("active");p||(b.isFunction(c.onLeave)&&c.onLeave.call(g,n,h,l),b.isFunction(c.afterLoad)&&c.afterLoad.call(a,A,h));K(A,0);c.anchors.length&&!p&&(q=A,L(k,m,A,h));clearTimeout(W);W=setTimeout(function(){H=!1},100)}c.scrollBar&&(clearTimeout(X),X=setTimeout(function(){p||(b(".fp-section.active").is(a)&&(v=!0),r(a),v=!1)},1E3))}function Y(a){return a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):a.find(".fp-scrollable")}
function B(a,d){if(m[a]){var c,f;"down"==a?(c="bottom",f=b.fn.fullpage.moveSectionDown):(c="top",f=b.fn.fullpage.moveSectionUp);if(0<d.length)if(c="top"===c?!d.scrollTop():"bottom"===c?d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight:void 0,c)f();else return!0;else f()}}function ua(a){var d=a.originalEvent;if(!Z(a.target)){c.autoScrolling&&a.preventDefault();a=b(".fp-section.active");var e=Y(a);p||w||(d=aa(d),u=d.y,C=d.x,a.find(".fp-slides").length&&Math.abs(D-C)>Math.abs(x-u)?Math.abs(D-C)>b(window).width()/
100*c.touchSensitivity&&(D>C?m.right&&b.fn.fullpage.moveSlideRight():m.left&&b.fn.fullpage.moveSlideLeft()):c.autoScrolling&&Math.abs(x-u)>b(window).height()/100*c.touchSensitivity&&(x>u?B("down",e):u>x&&B("up",e)))}}function Z(a,d){d=d||0;var e=b(a).parent();return d<c.normalScrollElementTouchThreshold&&e.is(c.normalScrollElements)?!0:d==c.normalScrollElementTouchThreshold?!1:Z(e,++d)}function va(a){a=a.originalEvent;c.scrollBar&&b("html,body").stop();a=aa(a);x=a.y;D=a.x}function t(a){if(c.autoScrolling){a=
window.event||a;var d=Math.max(-1,Math.min(1,a.wheelDelta||-a.deltaY||-a.detail));c.scrollBar&&(a.preventDefault?a.preventDefault():a.returnValue=!1);a=b(".fp-section.active");a=Y(a);p||(0>d?B("down",a):B("up",a));return!1}c.scrollBar&&b("html,body").stop()}function ba(a){var d=b(".fp-section.active").find(".fp-slides");if(d.length&&!w){var e=d.find(".fp-slide.active"),f=null,f="prev"===a?e.prev(".fp-slide"):e.next(".fp-slide");if(!f.length){if(!c.loopHorizontal)return;f="prev"===a?e.siblings(":last"):
e.siblings(":first")}w=!0;y(d,f)}}function ca(){b(".fp-slide.active").each(function(){M(b(this))})}function r(a,d,e){var f=a.position();if("undefined"!==typeof f&&(d={element:a,callback:d,isMovementUp:e,dest:f,dtop:f.top,yMovement:I(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:b(".fp-section.active"),leavingSection:b(".fp-section.active").index(".fp-section")+1,localIsResizing:v},!(d.activeSection.is(a)&&!v||c.scrollBar&&b(window).scrollTop()===
d.dtop))){if(d.activeSlide.length)var g=d.activeSlide.data("anchor"),n=d.activeSlide.index();c.autoScrolling&&c.continuousVertical&&"undefined"!==typeof d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&(d.isMovementUp?b(".fp-section.active").before(d.activeSection.nextAll(".fp-section")):b(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()),k(b(".fp-section.active").position().top),ca(),d.wrapAroundElements=d.activeSection,
d.dest=d.element.position(),d.dtop=d.dest.top,d.yMovement=I(d.element));a.addClass("active").siblings().removeClass("active");p=!0;L(n,g,d.anchorLink,d.sectionIndex);b.isFunction(c.onLeave)&&!d.localIsResizing&&c.onLeave.call(d.activeSection,d.leavingSection,d.sectionIndex+1,d.yMovement);wa(d);q=d.anchorLink;c.autoScrolling&&K(d.anchorLink,d.sectionIndex)}}function wa(a){if(c.css3&&c.autoScrolling&&!c.scrollBar)da("translate3d(0px, -"+a.dtop+"px, 0px)",!0),setTimeout(function(){ea(a)},c.scrollingSpeed);
else{var d=xa(a);b(d.element).animate(d.options,c.scrollingSpeed,c.easing).promise().done(function(){ea(a)})}}function xa(a){var b={};c.autoScrolling&&!c.scrollBar?(b.options={top:-a.dtop},b.element="."+fa):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function ya(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?b(".fp-section:first").before(a.wrapAroundElements):b(".fp-section:last").after(a.wrapAroundElements),k(b(".fp-section.active").position().top),ca())}
function ea(a){ya(a);b.isFunction(c.afterLoad)&&!a.localIsResizing&&c.afterLoad.call(a.element,a.anchorLink,a.sectionIndex+1);setTimeout(function(){p=!1;b.isFunction(a.callback)&&a.callback.call(this)},600)}function ga(){if(!H){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];if(b.length){var c="undefined"===typeof q,f="undefined"===typeof q&&"undefined"===typeof a&&!w;(b&&b!==q&&!c||f||!w&&N!=a)&&O(b,a)}}}function y(a,d){var e=d.position(),f=a.find(".fp-slidesContainer").parent(),
g=d.index(),n=a.closest(".fp-section"),h=n.index(".fp-section"),l=n.data("anchor"),m=n.find(".fp-slidesNav"),k=d.data("anchor"),p=v;if(c.onSlideLeave){var r=n.find(".fp-slide.active"),q=r.index(),t;t=q==g?"none":q>g?"left":"right";p||"none"===t||b.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(r,l,h+1,q,t)}d.addClass("active").siblings().removeClass("active");"undefined"===typeof k&&(k=g);!c.loopHorizontal&&c.controlArrows&&(n.find(".fp-controlArrow.fp-prev").toggle(0!=g),n.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));
n.hasClass("active")&&L(g,k,l,h);var u=function(){p||b.isFunction(c.afterSlideLoad)&&c.afterSlideLoad.call(d,l,h+1,k,g);w=!1};c.css3?(e="translate3d(-"+e.left+"px, 0px, 0px)",ha(a.find(".fp-slidesContainer"),0<c.scrollingSpeed).css(ia(e)),setTimeout(function(){u()},c.scrollingSpeed,c.easing)):f.animate({scrollLeft:e.left},c.scrollingSpeed,c.easing,function(){u()});m.find(".active").removeClass("active");m.find("li").eq(g).find("a").addClass("active")}function ja(){ka();if(E){if("text"!==b(document.activeElement).attr("type")){var a=
b(window).height();Math.abs(a-P)>20*Math.max(P,a)/100&&(b.fn.fullpage.reBuild(!0),P=a)}}else clearTimeout(la),la=setTimeout(function(){b.fn.fullpage.reBuild(!0)},500)}function ka(){if(c.responsive){var a=g.hasClass("fp-responsive");b(window).width()<c.responsive?a||(b.fn.fullpage.setAutoScrolling(!1,"internal"),b("#fp-nav").hide(),g.addClass("fp-responsive")):a&&(b.fn.fullpage.setAutoScrolling(Q.autoScrolling,"internal"),b("#fp-nav").show(),g.removeClass("fp-responsive"))}}function ha(a){var b="all "+
c.scrollingSpeed+"ms "+c.easingcss3;a.removeClass("fp-notransition");return a.css({"-webkit-transition":b,transition:b})}function R(a){return a.addClass("fp-notransition")}function za(a,d){if(825>a||900>d){var c=Math.min(100*a/825,100*d/900).toFixed(2);b("body").css("font-size",c+"%")}else b("body").css("font-size","100%")}function K(a,d){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));c.navigation&&(b("#fp-nav").find(".active").removeClass("active"),
a?b("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):b("#fp-nav").find("li").eq(d).find("a").addClass("active"))}function I(a){var d=b(".fp-section.active").index(".fp-section");a=a.index(".fp-section");return d==a?"none":d>a?"up":"down"}function z(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),e=a.find(".fp-scrollable"),f;e.length?f=e.get(0).scrollHeight:(f=a.get(0).scrollHeight,c.verticalCentered&&(f=a.find(".fp-tableCell").get(0).scrollHeight));b=l-parseInt(b.css("padding-bottom"))-
parseInt(b.css("padding-top"));f>b?e.length?e.css("height",b+"px").parent().css("height",b+"px"):(c.verticalCentered?a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):a.wrapInner('<div class="fp-scrollable" />'),a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):ma(a);a.css("overflow","")}function ma(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}
function na(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+oa(a)+'px;" />')}function oa(a){var b=l;if(c.paddingTop||c.paddingBottom)b=a,b.hasClass("fp-section")||(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=l-a;return b}function da(a,b){b?ha(g):R(g);g.css(ia(a));setTimeout(function(){g.removeClass("fp-notransition")},10)}function O(a,d){var c;"undefined"===typeof d&&(d=0);c=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-
1);a===q||c.hasClass("active")?pa(c,d):r(c,function(){pa(c,d)})}function pa(a,b){if("undefined"!=typeof b){var c=a.find(".fp-slides"),f=c.find('[data-anchor="'+b+'"]');f.length||(f=c.find(".fp-slide").eq(b));f.length&&y(c,f)}}function Aa(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var e=a.find(".fp-slidesNav");e.addClass(c.slidesNavPosition);for(var f=0;f<b;f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');e.css("margin-left","-"+e.width()/2+"px");e.find("li").first().find("a").addClass("active")}
function L(a,b,e,f){var g="";c.anchors.length?(a?("undefined"!==typeof e&&(g=e),"undefined"===typeof b&&(b=a),N=b,qa(g+"/"+b)):("undefined"!==typeof a&&(N=b),qa(e)),F(location.hash)):"undefined"!==typeof a?F(f+"-"+a):F(String(f))}function qa(a){if(c.recordHistory)location.hash=a;else if(E||S)history.replaceState(void 0,void 0,"#"+a);else{var b=window.location.href.split("#")[0];window.location.replace(b+"#"+a)}}function F(a){a=a.replace("/","-").replace("#","");b("body")[0].className=b("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g,
"");b("body").addClass("fp-viewing-"+a)}function Ba(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var f in c)void 0!==a.style[f]&&(a.style[f]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[f]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}function Ca(){if(E||S){var a=ra();
b(document).off("touchstart "+a.down).on("touchstart "+a.down,va);b(document).off("touchmove "+a.move).on("touchmove "+a.move,ua)}}function Da(){if(E||S){var a=ra();b(document).off("touchstart "+a.down);b(document).off("touchmove "+a.move)}}function ra(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function aa(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&
(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;return b}function M(a){b.fn.fullpage.setScrollingSpeed(0,"internal");y(a.closest(".fp-slides"),a);b.fn.fullpage.setScrollingSpeed(Q.scrollingSpeed,"internal")}function k(a){c.scrollBar?g.scrollTop(a):c.css3?da("translate3d(0px, -"+a+"px, 0px)",!1):g.css("top",-a)}function ia(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Ea(){k(0);b("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();b(".fp-section").css({height:"",
"background-color":"",padding:""});b(".fp-slide").css({width:""});g.css({height:"",position:"","-ms-touch-action":"","touch-action":""});b(".fp-section, .fp-slide").each(function(){ma(b(this));b(this).removeClass("fp-table active")});R(g);R(g.find(".fp-easing"));g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){b(this).replaceWith(this.childNodes)});b("html, body").scrollTop(0)}function T(a,b,e){c[a]=b;"internal"!==e&&(Q[a]=b)}function G(a,b){console&&console[a]&&console[a]("fullPage: "+
b)}c=b.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,easing:"easeInQuart",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",
verticalCentered:!0,resize:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".full-slide",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},c);(function(){c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,G("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.continuousVertical&&
c.scrollBar&&(c.continuousVertical=!1,G("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));b.each(c.anchors,function(a,c){(b("#"+c).length||b('[name="'+c+'"]').length)&&G("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();b.extend(b.easing,{easeInQuart:function(a,b,c,f,g){return f*(b/=g)*b*b*b+c}});b.fn.fullpage.setAutoScrolling=function(a,d){T("autoScrolling",a,d);var e=
b(".fp-section.active");c.autoScrolling&&!c.scrollBar?(b("html, body").css({overflow:"hidden",height:"100%"}),b.fn.fullpage.setRecordHistory(c.recordHistory,"internal"),g.css({"-ms-touch-action":"none","touch-action":"none"}),e.length&&k(e.position().top)):(b("html, body").css({overflow:"visible",height:"initial"}),b.fn.fullpage.setRecordHistory(!1,"internal"),g.css({"-ms-touch-action":"","touch-action":""}),k(0),b("html, body").scrollTop(e.position().top))};b.fn.fullpage.setRecordHistory=function(a,
b){T("recordHistory",a,b)};b.fn.fullpage.setScrollingSpeed=function(a,b){T("scrollingSpeed",a,b)};b.fn.fullpage.setMouseWheelScrolling=function(a){a?document.addEventListener?(document.addEventListener("mousewheel",t,!1),document.addEventListener("wheel",t,!1)):document.attachEvent("onmousewheel",t):document.addEventListener?(document.removeEventListener("mousewheel",t,!1),document.removeEventListener("wheel",t,!1)):document.detachEvent("onmousewheel",t)};b.fn.fullpage.setAllowScrolling=function(a,
c){"undefined"!=typeof c?(c=c.replace(" ","").split(","),b.each(c,function(c,d){switch(d){case "up":m.up=a;break;case "down":m.down=a;break;case "left":m.left=a;break;case "right":m.right=a;break;case "all":b.fn.fullpage.setAllowScrolling(a)}})):a?(b.fn.fullpage.setMouseWheelScrolling(!0),Ca()):(b.fn.fullpage.setMouseWheelScrolling(!1),Da())};b.fn.fullpage.setKeyboardScrolling=function(a){c.keyboardScrolling=a};b.fn.fullpage.moveSectionUp=function(){var a=b(".fp-section.active").prev(".fp-section");
a.length||!c.loopTop&&!c.continuousVertical||(a=b(".fp-section").last());a.length&&r(a,null,!0)};b.fn.fullpage.moveSectionDown=function(){var a=b(".fp-section.active").next(".fp-section");a.length||!c.loopBottom&&!c.continuousVertical||(a=b(".fp-section").first());a.length&&r(a,null,!1)};b.fn.fullpage.moveTo=function(a,c){var e="",e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);"undefined"!==typeof c?O(a,c):0<e.length&&r(e)};b.fn.fullpage.moveSlideRight=function(){ba("next")};b.fn.fullpage.moveSlideLeft=
function(){ba("prev")};b.fn.fullpage.reBuild=function(a){v=!0;var d=b(window).width();l=b(window).height();c.resize&&za(l,d);b(".fp-section").each(function(){var a=b(this).find(".fp-slides"),d=b(this).find(".fp-slide");c.verticalCentered&&b(this).find(".fp-tableCell").css("height",oa(b(this))+"px");b(this).css("height",l+"px");c.scrollOverflow&&(d.length?d.each(function(){z(b(this))}):z(b(this)));d.length&&y(a,a.find(".fp-slide.active"))});d=b(".fp-section.active");d.index(".fp-section")&&r(d);v=
!1;b.isFunction(c.afterResize)&&a&&c.afterResize.call(g);b.isFunction(c.afterReBuild)&&!a&&c.afterReBuild.call(g)};var w=!1,E=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),S="ontouchstart"in window||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,g=b(this),l=b(window).height(),p=!1,v=!1,q,N,h,fa="fullpage-wrapper",m={up:!0,down:!0,left:!0,right:!0},Q=b.extend(!0,{},c);b.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=Ba());b(this).length?
(g.css({height:"100%",position:"relative"}),g.addClass(fa)):G("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");b(c.sectionSelector).each(function(){b(this).addClass("fp-section")});b(c.slideSelector).each(function(){b(this).addClass("fp-slide")});c.navigation&&ta();b(".fp-section").each(function(a){var d=b(this),e=b(this).find(".fp-slide"),f=e.length;a||0!==b(".fp-section.active").length||b(this).addClass("active");b(this).css("height",
l+"px");(c.paddingTop||c.paddingBottom)&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.sectionsColor[a]&&b(this).css("background-color",c.sectionsColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);if(1<f){}else c.verticalCentered&&na(b(this))}).promise().done(function(){b.fn.fullpage.setAutoScrolling(c.autoScrolling,"internal");var a=b(".fp-section.active").find(".fp-slide.active");a.length&&(0!==b(".fp-section.active").index(".fp-section")||0===b(".fp-section.active").index(".fp-section")&&0!==a.index())&&M(a);c.fixedElements&&c.css3&&b(c.fixedElements).appendTo("body");
c.navigation&&(h.css("margin-top","-"+h.height()/2+"px"),h.find("li").eq(b(".fp-section.active").index(".fp-section")).find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).closest(".fullpage-wrapper").length&&b(c.menu).appendTo("body");c.scrollOverflow?("complete"===document.readyState&&U(),b(window).on("load",U)):b.isFunction(c.afterRender)&&c.afterRender.call(g);ka();a=window.location.hash.replace("#","").split("/")[0];if(a.length){var d=b('[data-anchor="'+a+'"]');!c.animateAnchor&&d.length&&
(c.autoScrolling?k(d.position().top):(k(0),F(a),b("html, body").scrollTop(d.position().top)),K(a,null),b.isFunction(c.afterLoad)&&c.afterLoad.call(d,a,d.index(".fp-section")+1),d.addClass("active").siblings().removeClass("active"))}b(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&O(b,a)})});var W,X,H=!1;b(window).on("scroll",V);var x=0,D=0,u=0,C=0;b(window).on("hashchange",ga);b(document).keydown(function(a){if(c.keyboardScrolling&&c.autoScrolling&&
(40!=a.which&&38!=a.which||a.preventDefault(),!p))switch(a.which){case 38:case 33:b.fn.fullpage.moveSectionUp();break;case 40:case 34:b.fn.fullpage.moveSectionDown();break;case 36:b.fn.fullpage.moveTo(1);break;case 35:b.fn.fullpage.moveTo(b(".fp-section").length);break;case 37:b.fn.fullpage.moveSlideLeft();break;case 39:b.fn.fullpage.moveSlideRight()}});b(document).on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=b(this).parent().index();r(b(".fp-section").eq(a))});b(document).on("click touchstart",
".fp-slidesNav a",function(a){a.preventDefault();a=b(this).closest(".fp-section").find(".fp-slides");var c=a.find(".fp-slide").eq(b(this).closest("li").index());y(a,c)});c.normalScrollElements&&(b(document).on("mouseenter",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!1)}),b(document).on("mouseleave",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!0)}));b(".fp-section").on("click touchstart",".fp-controlArrow",function(){b(this).hasClass("fp-prev")?
b.fn.fullpage.moveSlideLeft():b.fn.fullpage.moveSlideRight()});b(window).resize(ja);var P=l,la;b.fn.fullpage.destroy=function(a){b.fn.fullpage.setAutoScrolling(!1,"internal");b.fn.fullpage.setAllowScrolling(!1);b.fn.fullpage.setKeyboardScrolling(!1);b(window).off("scroll",V).off("hashchange",ga).off("resize",ja);b(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",c.normalScrollElements).off("mouseout",c.normalScrollElements);
b(".fp-section").off("click",".fp-controlArrow");a&&Ea()}}})(jQuery);
		}
	/*	alert("hello");
       $('.js').css('display','none');*/
    


/*function resize() {
  var vheight = $(window).height() ;
  var vwidth = $(window).width();
  $('.fullheight').css({
    'height': vheight,
    'width': vwidth 
  });
};
 
// The scroll-down function
function scrollDown() {
  var vheight = $(window).height() - 66	;
  $('html, body').animate({
    scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
  }, 500);  
};
 
// Do stuff when document is ready
$(document).ready(function(){
  // Click to Scroll DOWN Functions
  $('.scroll-next').click(function(event){
    scrollDown();
    event.preventDefault();
  });
});*/
