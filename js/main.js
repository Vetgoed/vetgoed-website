
jQuery( document ).ready(function( $ ) {

  $('#animation-wrapper').hover(
    function() {
      TweenMax.to($('#straal'), 0, {scale:0.5, opacity: 0});
      TweenMax.to($('#idee-gloeilamp'), 0.1, {scale:1.2, opacity: 0});
      TweenMax.to($('#vetgoed-idee-gloeilamp'), 0, {opacity: 0, scale: 1.2});
      TweenMax.to($('#vetgoed-idee-gloeilamp'), 0.1, {opacity: 1, scale:1});
      TweenMax.to($('#straal'), 0.3, {scale:1, opacity: 1});
      TweenMax.to($('.vetgoed-idee'), 0.1, {color:"#cecece"});
      TweenMax.to($('.vetgoed-title'), 0.1, {color:"#000"});
    }, function() {
      TweenMax.to($('#idee-gloeilamp'), 0.1, {scale:1, opacity: 1});
      TweenMax.to($('#vetgoed-idee-gloeilamp'), 0.1, {opacity: 0, scale: 1.2});
      TweenMax.to($('.vetgoed-idee'), 0.1, {color:"#000"});
      TweenMax.to($('.vetgoed-title'), 0.1, {color:"#cecece"});
      TweenMax.to($('#straal'), 0.1, {scale:0.5, opacity: 0});
    }
  );

});
