$(document).ready(function(){


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
  // $('.img-perform-target2').each(function(){
  //   $(this).click(function(){
  //     var sel = $(this).find('img').attr('src');
  //     $('.img-perform-result2').find('img').attr('src', sel);
  //   });
  // });







});
