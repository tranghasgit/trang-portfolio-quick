


$(document).ready(function(){

var screenH = $(window).outerHeight();
var screenW = $(window).outerWidth();
var divH = $('.mobile-alert-instruction').outerHeight();
var divW = $('.mobile-alert-instruction').outerWidth();
var midOffsetH = (screenH-divH)/2;
var midOffsetW = (screenW-divW)/2;
$('.mobile-alert-instruction').css('top', midOffsetH, 'left', midOffsetW);
$('.mobile-alert-instruction').click(function(){
  $(this).remove();
});



//PRINTS================
  $('.img-prints-target0').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-prints-result0').find('img').attr('src', sel);
      $('.prints-caption0').find('p').text(cap);
    });
  });
  $('.img-prints-target1').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-prints-result1').find('img').attr('src', sel);
      $('.prints-caption1').find('p').text(cap);
    });
  });
  $('.img-prints-target2').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-prints-result2').find('img').attr('src', sel);
      $('.prints-caption2').find('p').text(cap);
    });
  });



//INSTALLATIONS================
  $('.img-install-target0').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-install-result0').find('img').attr('src', sel);
      $('.install-caption0').find('p').text(cap);
    });
  });
  $('.img-install-target1').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-install-result1').find('img').attr('src', sel);
      $('.install-caption1').find('p').text(cap);
    });
  });
  $('.img-install-target2').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-install-result2').find('img').attr('src', sel);
      $('.install-caption2').find('p').text(cap);
    });
  });


//VIDEOS================
  $('.img-videos-target0').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-videos-result0').find('img').attr('src', sel);
      $('.videos-caption0').find('p').text(cap);
    });
  });
  $('.img-videos-target1').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-videos-result1').find('img').attr('src', sel);
      $('.videos-caption1').find('p').text(cap);
    });
  });
  $('.img-videos-target2').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-videos-result2').find('img').attr('src', sel);
      $('.videos-caption2').find('p').text(cap);
    });
  });




//PERFORMANCES================
  $('.img-perform-target0').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-perform-result0').find('img').attr('src', sel);
      $('.perform-caption0').find('p').text(cap);
    });
  });
  $('.img-perform-target1').each(function(){
    $(this).click(function(){
      var sel = $(this).find('img').attr('src');
      var cap = $(this).find('img').attr('alt');
      $('.img-perform-result1').find('img').attr('src', sel);
      $('.perform-caption1').find('p').text(cap);
    });
  });

});


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
