$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

jQuery(document).ready(function($){  
$('header  ul li').hover(
        function () {
            $('ul', this).stop().slideDown(400);
        }, 
        function () {
            $('ul', this).stop().slideUp(400);            
        }
    );
});

$('#slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false
});