function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.5) + 'px');
  }

  $(document).ready(function() {
    $(window).scroll(function() {
      parallax();
    });
$(".content").masonry();
  });
