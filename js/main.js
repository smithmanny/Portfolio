$(document).ready(function() {
  // Get image height and assign it to wrapper
  var imgHeight = $('.test').height();
  $('.overlay-btn').css('height', imgHeight);
  // Move active on menu click
  var links = $('.links a')
  $('a[href^="#"]').click(function(event) {
    $('a[href^="#"]').removeClass('active');

  var target = $(this.getAttribute('href'));

if (target.length) {
  event.preventDefault();
  $('html, body').stop().animate({
    scrollTop: target.offset().top
  }, 500);
  // Add class to show border
  // $(this).addClass('active');
}
  });

$(document).scroll(function() {

  var scroll = $('.sticky-top').offset().top,
      $about = $('#about').offset().top,
      $port = $('#portfolio').offset().top,
      $contact = $('#contact').offset().top;
  // Check if Sticky Nav reached sections ID
  if ($(this).scrollTop() < $port) {
    links.removeClass('active');
    $('.about a').addClass('active');
  }
  else if ($(this).scrollTop() < $contact && $(this).scrollTop() < 1317) {
    links.removeClass('active');
    $('.port a').addClass('active');
  }
  else {
      links.removeClass('active');
      $('.contact a').addClass('active');
  }

});


});
