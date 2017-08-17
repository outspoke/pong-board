import 'jquery';
import 'what-input';
import 'foundation-sites';

$(document).ready(function(){
  $(document).foundation();

  var $carousel = $('.masonry-style-carousel');
  var $slides = $carousel.find('.slide');
  $slides.first().addClass('active');
  $slides.eq(1).addClass('in');
  setInterval(function(){
    var activeIndex = $carousel.find('.active').index();
    var nextIndex = activeIndex + 1;
    if (nextIndex >= $slides.length) {
      nextIndex = 0;
    }
    var upcomingIndex = nextIndex + 1;
    if (upcomingIndex >= $slides.length) {
      upcomingIndex = 0;
    }
    $slides.eq(activeIndex).addClass('out').removeClass('active');
    $slides.eq(nextIndex).removeClass('in').addClass('active');
    $slides.eq(upcomingIndex).addClass('in').removeClass('out');
  }, 7000);

});
