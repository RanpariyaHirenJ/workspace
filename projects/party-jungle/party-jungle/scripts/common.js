/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
    if ($(this).scrollTop() > 100) {
			$('.send-inquire').fadeIn();
			$('.wrapper').addClass('fixed')
    } else {
			$('.send-inquire').fadeOut();
			$('.wrapper').removeClass('fixed')
    }
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  /*Back to top Function start*/
//  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.send-inquire').fadeIn();
			$('.wrapper').addClass('fixed')
    } else {
      $('.send-inquire').fadeOut();
			$('.wrapper').removeClass('fixed')
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
  $(document).on('click', '.close-error', function () {
    $(this).parents('.seisson-message').slideUp();
  })
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
  /*mobile Navigation*/
  $('.toggle-btn').click(function () {
    if ($('.wrapper').hasClass('opened'))
    {
      $('.wrapper').removeClass('opened');
    }
    else
    {
      $('.wrapper').addClass('opened');
    }

  });
  $('.has-sub-menu').click(function () {
    var target = $(this).find('.sub-menu');
    var trigger = $(this);
    if (trigger.hasClass('opened')) {
      trigger.removeClass('opened');
    }
    else {
      trigger.addClass('opened');
    }

  });
  /*Mobile navigation end*/
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
  target.css('visibility', 'visible').find('.overlay-box').addClass('animated').addClass(animationIn);
  $(document).on('click', '.closeBtn', function () {
    $('.overlay').find('.overlay-box').removeClass('animated').removeClass(animationIn).addClass('animated ' + animationOut);
    $('body .overlay-bg').fadeOut(1000, function () {
      $(this).remove();
      $('.overlay').css('visibility', 'hidden').find('.overlay-box').removeClass('animated').removeClass(animationIn).removeClass(animationOut);
    });
  });
}

/*Overlay function end*/

function form_validate_jquery(container)
	{
		var return_state = true;		
		$(container).find("input, select, textarea" ).each(function(){
				
			var title = $(this).attr("title");			
			switch($(this).attr("validation"))
			{				
				case "text":
					if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
					{
						$(this).css("border","1px solid red");
						$(this).val('');
						$(this).attr("placeholder", ""+title+" cannot be blank !")
						return_state = false;													
					}
					else
					{
						$(this).css("border","1px solid green");
					}
				break;
				
				case "email":
					if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
					{
						$(this).css("border","1px solid red");
						$(this).val('');
						$(this).attr("placeholder", ""+title+" cannot be blank !")							
						return_state = false;
					}
					else if($(this).val().indexOf('@') == -1 || $(this).val().indexOf('.') == -1)
					{
						$(this).css("border","1px solid red");
						$(this).val('');
						$(this).attr("placeholder", "Invalid "+title+" !")							
						return_state = false;
					}
					else
					{
						$(this).css("border","1px solid green");
					}
				break;
				case "number":
					if($(this).val() == $(this).attr("placeholder") || $(this).val() == "")
					{
						$(this).css("border","1px solid red");
						$(this).val('');
						$(this).attr("placeholder", ""+title+" cannot be blank !")							
						return_state = false;
					}
					else if(isNaN($(this).val()))
					{
						$(this).css("border","1px solid red");
						$(this).val('');
						$(this).attr("placeholder", ""+title+" should be numeric !")							
						return_state = false;
					}
					else
					{
						$(this).css("border","1px solid green");
					}				
				break;	
			}
		})
		return return_state;
	}
	
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65130516-1', 'auto');
  ga('send', 'pageview');
