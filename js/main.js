$(document).ready(function() {
  // Get image height and assign it to wrapper
  var imgHeight = $('.test').height();
  $('.overlay-btn').css('height', imgHeight);
  // Move active on menu click
  var links = $('.links a')
  $('.links a').click(function() {
    $('.links a').removeClass('active');
    $(this).addClass('active');
  });

});
