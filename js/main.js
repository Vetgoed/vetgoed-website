jQuery( document ).ready(function( $ ) {


    // Kroketlamp animation
/*
        $('#animation-wrapper').hover(
            function() {
              TweenMax.to($('#idee-gloeilamp'), 0.1, {scale:1.2, opacity: 0});
              TweenMax.set($('#vetgoed-idee-gloeilamp'), {opacity: 0, scale: 1.2});
              TweenMax.to($('#vetgoed-idee-gloeilamp'), 0.1, {opacity: 1, scale:1});

              TweenMax.set($('#straal'), {scale:0.5, opacity: 0});
              TweenMax.to($('#straal'), 0.4, {scale:1, opacity: 1, ease: Power3.easeOut});

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
*/
    //


    // Random video background
        var vids = ['vetgoed-webbg1', 'vetgoed-webbg2', 'vetgoed-webbg3', 'vetgoed-webbg4'];

        $('#page').vide('/vid/' + vids[Math.floor(Math.random() * vids.length)], {
          bgColor: '#000000'
        });
    //


});
