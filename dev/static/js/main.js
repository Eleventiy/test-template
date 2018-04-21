$(function () {

    $('.sect-hero').mousemove(function(e) {
        var vw = $(window).width();
        if (vw >= 1060) {
            var posX = e.clientX;
            var posY = e.clientY;
            var posX = posX * 2;
            posY = posY * 2;

            $('.hero-content').css('top', ((0 + (posY / -50)) + "px"));
            $('.hero-content').css('left', (( 0 + (posX / -80)) + "px"));

            $('.hero-copter__wrapper').css('top', ((0 + (posY / -120)) + "px"));
            $('.hero-copter__wrapper').css('left', (( 0 + (posX / -130)) + "px"));
        }

    });

});