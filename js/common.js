$(document).ready(function () {

	$(".js-phone").mask("+7 (999) 999-9999");

	$('.popup_close').on('click', function() {
		$('.popup_overlay').removeClass('active');
	});

	$('.cell_popup_active').on('click', function(event) {
		event.preventDefault();

		$('.popup_overlay').addClass('active');
	});

	$('#ranger_10').on("input", function () {
		let value = $(this).val();
		$('#ranger_input-10').val(value);
	});

	$('#ranger_input-10').change(function () {
		let value = $(this).val();
		$('#ranger_10').val(value);
	})

	var sliders = [];
    $('.wallpaper-slider').each(function(){
        var id = $(this).data('id');
        sliders.push(id);
    });

    $('.wallpaper-slider').owlCarousel({
        dots: true,
        nav: false,
        items: 1,
    });

    $(".wallpaper-slider .owl-dot").mouseenter(function(){
		  $(this).trigger('to.owl.carousel', [$(this).index(), 300]);
          $( '.wallpaper-slider .owl-dot' ).removeClass( 'active' );
          $(this).addClass( 'active' );
    });


	window.onload = function () {
		$('.ba-slider').beforeAfter();
	}

	// tabs

	$('.nav-pills li').on('click', function(event) {
		event.preventDefault();

		let count = $(this).index();
	
		$(this).find('.show').addClass('active');
		$(this).siblings().find('.show').removeClass('active');
		
		$(this).parent().next().find('.tab-pane').eq(count).addClass('active').siblings().removeClass('active');
	});
});