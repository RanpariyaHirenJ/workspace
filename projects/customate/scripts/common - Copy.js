/*Doucment resize Function*/
$(window).resize(function () {
	//location.reload();
  	fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
      $('.footer-line').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
      $('.footer-line').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  
  /*Header footer loading*/
  /*accordion start*/
  $('.accordion dl dt').click(function () {
    var trigger = $(this);
    var target = trigger.next('dd');
    if (target.css('display') == 'none')
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
      target.slideDown();
      trigger.parents('dl').addClass('active');
    }
    else
    {
      $('.accordion dl').removeClass('active')
      $('.accordion dl dd').slideUp();
    }
  });
  /*accordion start*/
		
    /*Animate label form*/

		$(document).on('click', '.closeBtn', function () {
		    $('#revolutionary-technology').find('iframe').attr('src', '');
		    $('#benefit-customers').find('iframe').attr('src', '');
		    $('#our-story').find('iframe').attr('src', '');
		});

		$(".revolutionary-technology-vid").click(function () {
		    $('#revolutionary-technology').find('iframe').attr('src', 'https://www.youtube.com/embed/D_oYlN1mZrU?rel=0&amp;controls=0&amp;showinfo=0');
		    $('#benefit-customers').find('iframe').attr('src', '');
		    $('#our-story').find('iframe').attr('src', '');
		})

		$(".benefit-customers-vid").click(function () {
		    $('#benefit-customers').find('iframe').attr('src', 'https://www.youtube.com/embed/yqSiJCCiy0w?rel=0&amp;controls=0&amp;showinfo=0');
		    $('#revolutionary-technology').find('iframe').attr('src', '');
		    $('#our-story').find('iframe').attr('src', '');
		})

		$(".our-story-vid").click(function () {
		    $('#our-story').find('iframe').attr('src', 'https://www.youtube.com/embed/E2Q8xO5XC8A?rel=0&amp;controls=0&amp;showinfo=0');
		    $('#revolutionary-technology').find('iframe').attr('src', '');
		    $('#benefit-customers').find('iframe').attr('src', '');
		})

		
		$('.ask-for-demo-mob').addClass('hide-list')

		$(".watch-video-mob").click(function () {
		    if ($(window).width() < 1024 && $('.ask-for-demo-mob').hasClass('hide-list')) {
		        //debugger;
		        //$('#our-story').find('iframe').attr('src', 'https://www.youtube.com/embed/E2Q8xO5XC8A?rel=0&amp;controls=0&amp;showinfo=0');
		        //$('#revolutionary-technology').find('iframe').attr('src', '');
		        //$('#benefit-customers').find('iframe').attr('src', '');
		        //alert("clicked")
		        //$('.mob').css("display", "block !important");
		        //$('.mob').css('display','block !important');
		        $('.ask-for-demo-mob').attr('style', 'display:block !important')
		        $('.ask-for-demo-mob').removeClass('hide-list')
		        $('.ask-for-demo-mob').addClass('show-list')
		    }
		    else {
		        $('.ask-for-demo-mob').attr('style', 'display:none !important')
		        $('.ask-for-demo-mob').removeClass('show-list')
		        $('.ask-for-demo-mob').addClass('hide-list')
		    }
		})

		

		$("body").click(function () {
		    console.log($('.ask-for-demo-mob').attr('style'))
		    if ($(window).width() < 1024 && $('.ask-for-demo-mob').attr('style') == "display:block !important") {
		        console.log($('.ask-for-demo-mob').attr('style'))
		        $('.ask-for-demo-mob').attr('style', 'display:none !important')
		    }
		    //else {
		    //    $('.ask-for-demo-mob').attr('style', 'display:none !important')
		    //}
		})
		
		

		

});

function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


/*Overlay function*/
var animationIn, target, animationOut;
function overlayBox(popupID)
{
  target = $('#' + popupID)
  animationIn = target.attr('data-animation-in');
  animationOut = target.attr('data-animation-out');
  if (typeof (animationIn) == 'undefined' || animationIn === '(an empty string)' || animationIn === null || animationIn === '')
  {    
    animationIn = 'zoomIn';
  }
  if (typeof (animationOut) == 'undefined' || animationOut === '(an empty string)' || animationOut === null || animationOut === '')
  {
    animationOut = 'zoomOut';
  }
  $('body').append('<div class="overlay-bg"></div>')
  target.find('.overlay-header').append('<div class="closeBtn">X</div>');
  target.css('visibility', 'visible').css('display', 'block').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
		
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').css('display', 'none').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
		$(this).remove();
  });
}
/*Overlay function end*/

$(function(){
	/*jQuery tabs */
/*script for append usefull element*/
$('.tabNav li').each(function(){
  var tabContent = $(this).html();
  var relation = $(this).find('a').attr('rel')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  resultCnt.children('div#'+relation).prepend('<div class="mobile-menu">'+ tabContent +'</div>')
})

/*script for desktop navigation */
$('.tabNav li a').click(function(){
  var relation = $(this).attr('rel')
  var tabNavigation = $(this).parents('.tabNav')
  var resultCnt =  $(this).parents('.tabNav').next('.tabResult');
  
  tabNavigation.children().find('a').removeClass('active')
  $(this).addClass('active')
  
  if(resultCnt.children('div#'+relation).css('display') == 'none')
  {
    resultCnt.children('div').slideUp();
    resultCnt.children('div#'+relation).slideDown();
  }
  else
  {
  	resultCnt.children('div#'+relation).slideUp();
  }
})
/*jQuery tabs end */
})

function tabnextclick(relation) {
	var resultCnt = $('.tabResult');

	tab = $('.tabResult').prev('.tabNav').find('a');

	for (var i = 0; i < tab.length; i++) {
		var target = tab.eq(i);
		
		var tab_relation = target.attr('rel');
		if (tab_relation === relation) {
			tab.eq(i).parents('li').removeClass('disabled');
		}
	}
	if (resultCnt.children('div#' + relation).css('display') === 'none') {
		resultCnt.children('div').slideUp();
		$('.tabNav li a').removeClass('active');
		$('.tabNav ').find('a[rel='+relation+']').parents('li').children('a').addClass('active');
		resultCnt.children('div#' + relation).slideDown();
	}
	var ofsetd=$('.tabNav').offset().top;
	$('body,html').animate({scrollTop: ofsetd}, 800);
}
(function() {
  "use strict";

  var toggles = document.querySelectorAll(".menu-icon");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
			
    });
  }


$(document).ready(function(){
	var wind_height = $(window).height();
	if($(window).width() < 1024){
		$(".nav-menu").css("height", wind_height);
	}
});

$('.mobil-icon-toggle').click(function(){
	if($(this).hasClass('active'))
	{
		$('.nav-menu').addClass('open-navigation');
		$("html").css("overflow", "hidden");
		$('body').append('<div class="overlay-bg"></div>')
	}
	else
	{
		$('.nav-menu').removeClass('open-navigation');
		$("html").css("overflow", "visible");
		$('body .overlay-bg').fadeOut(500, function () {
			$(this).remove();
		  
		});
	}
});
	
	
	$('.closebtncom').click(function(){
		$(this).parents('.community-updates').addClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:0})
	})
	$('.communityblockbx dl dt').click(function(){
		$(this).parents('.community-updates').removeClass('smallupdatebx');
		$('.slider-udpdates').animate({opacity:1})
	});
	
})();

/*Docuemnt load function*/


