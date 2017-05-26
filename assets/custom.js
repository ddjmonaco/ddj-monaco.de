jQuery(function($) {
  jQuery.noConflict();
  jQuery(document).ready(function($){
    $('.map-toggle').click( function(event) {
      event.preventDefault();

      $(this).toggleClass('collapsed');
      $(this).find('span.show, span.hide').toggle();
      $('#map').slideToggle();
    });

    /********** adjust the header image height on homepage **********/
    resizeHeaderImage();
    $(window).bind("resize", resizeHeaderImage);

    function resizeHeaderImage( e ) {
      elem = $('.home .header-wrapper');
      if (elem.outerHeight() < $(window).height()) {
         elem.css({height:$(window).height()});
      }
    }
  });
});