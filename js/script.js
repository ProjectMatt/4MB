$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() >= 650 && !$('#site-header').hasClass('sticky')){
            $('#site-header').addClass('sticky'); 
        }
        else if($(window).scrollTop() < 650 && $('#site-header').hasClass('sticky')){
           $('#site-header').removeClass('sticky'); 
        }
    });

    var options = {
        animateClass: 'animate__animated',
        animateThreshold: 100,
        scrollPollInterval: 20
    };
    $('.home-section').AniView(options);

    document.querySelectorAll('.review').forEach(review => {
        review.addEventListener('mouseenter', function() {
            this.classList.add('expanded');
        });
        review.addEventListener('mouseleave', function() {
            this.classList.remove('expanded');
        });
    });
});
