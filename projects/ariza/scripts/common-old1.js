/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
    if ($(window).width() >= 1024) {
        $(".filter-section").stick_in_parent()
    }
  fixedFooter()
  $('.loader').fadeOut();
  
})


  
$(window).load(function () {
  $('.qty-actions .increase').click(function(){
    var target =  $(this).parents('.qty').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value + 1)
  });

  $('.qty-actions .decrease').click(function(){
    var target =  $(this).parents('.qty').find('input[type="number"]');
    var target_value = parseInt(target.val());
    target.val(target_value - 1)
  });


})

/*Ready Funtion*/
$(function () {
  fixedFooter()
  $('.input-type-select span').click(function () {
    $(this).parents('.input-type-select').find('select').trigger('click');
  })
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
//  $('body').append('<div id="empDtlError" class="overlay-box"><div class="seisson-message error"><span></span> Overlay id is not defined </div></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
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

  if ($(window).width() < 1024) {
      $(".filter-cntr").find("h2").click(function () {
          $(this).parent().find(".cat-filter").toggle();
      })

      $(".filter-section").clickOff(function () {
          $(".cat-filter").hide();
      });
  }

  
  
});

if ($(window).width() < 1024) {
    $.fn.clickOff = function (callback, selfDestroy) {
        var clicked = false;
        var parent = this;
        var destroy = selfDestroy || true;

        parent.click(function () {
            clicked = true;
        });

        $(document).click(function (event) {
            if (!clicked) {
                callback(parent, event);
            }
            if (destroy) {
            };
            clicked = false;
        });
    };
}


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
  });
}

/*Overlay function end*/
$(function(){
	/*Animate label form*/
	$('.animate-label .input-group').click(function(){
		if ($(this).find('select').size() > 0) {
		}  
		else {
			$(this).find('input').focus();
			$(this).find('label').addClass('active');
		
		}     
		if ($(this).find('.custom-select-options,.custom-selct-bg').size() > 0) {
			$(this).find('.custom-select-options,.custom-selct-bg').fadeIn();
		}
	
	});
	$('.animate-label .input-group input,.animate-label .input-group textarea').blur(function(){
		if (this.value.length > 0) {
			return false;
		}
		else
		{
			$(this).prev('label').removeClass('active');
		}
	});

	$('.input-group').on('focus', 'input, select, textarea', function () {
		$(this).prev('label').addClass('active');
	});
	
	$('.input-group textarea, .input-group input,.input-group select').each(function () {
		if (this.value.length > 0) {
		var div = $(this).prev('label').addClass('active');
		}
	});
	$('.input-group').click(function(){
		$(this).find('input').focus();
		$(this).find('label').addClass('active');
	});

})
/*Animate label form*/
$(function() {
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
  $('.mobil-icon-toggle').click(function(){
    if($(this).hasClass('active'))
    {
      $('.mobileNav').addClass('menubaropen');
    }
    else
    {
      $('.mobileNav').removeClass('menubaropen');
    }
  });
	$(document).on('click', '.hasSubmenu .sub-mobileClick', function () {
		var SubStatus=$(this).next('.submenu').css('display');
		if(SubStatus=='none')
		{
			$(this).next('.submenu').slideDown();
			$(this).parent('.hasSubmenu').addClass('openSubMob');
		}
		else
		{
			$(this).next('.submenu').slideUp();
			$(this).parent('.hasSubmenu').removeClass('openSubMob');
		}
	});
	
	$(document).on('click', '.likebutton span', function () {
   if($(this).hasClass('active'))
	 {
		$(this).removeClass('active');
		}
		else
		{
		$(this).addClass('active');
		}
  }) 
});

var stickyNavTop = $('.header').offset().top;
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (0)) { 
        $('.header').addClass('fixNav');
        $('.commonSpace').addClass('addSpacing');
    } else {
      
        $('.header').removeClass('fixNav');
        $('.commonSpace').removeClass('addSpacing');
    }
};
stickyNav();
$(window).scroll(function() {
  stickyNav();
});

