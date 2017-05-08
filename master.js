(function($){
  var headerText = $('header .content p');
  var copyright = $('.branding .wrap .copyright');
  var menuTrigger = $('.mobilebars');

  if ($(window).width() < 500) {
    headerText.text('DIGITAL MEDIA AGENCY');
    copyright.text('COPYRIGHT © 2015  DIWANEEE SERBIA');
  }

  menuTrigger.click(function(){
    $('.mainNavigation').fadeToggle(200);
  });
})(jQuery);
