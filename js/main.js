$(document).ready(function(){
	var empty_div = $('.empty_div');
	var nav_a = $('.nav a')
	var nav_but = $('.nav button')
	var nav = $('nav')
	var nav_img = $('.navbar-brand img')
	var scroll_menu = $('.head_top_menu')
	var top_menu = $('.features_top_menu')
	var old_log = nav_img.attr('src');
	var ticking = false;
	var pricing = $('.pricing');
	var features = $('.main_cont');
	var main = $('.trial')
	// window.addEventListener('scroll', function(e) {
		 $(window).scroll(function(e){
		if(!$('nav').is(':animated')){
			if($(this).scrollTop() < 80 && ticking == true){
					nav_img.attr('src', old_log);
				nav.animate({height:'0px'},300,function(){
					nav_but.removeClass('navbar_but_color')
					nav_a.removeClass('navbar_a_color')
					nav.removeClass('navbar_fixed')
					scroll_menu.removeClass('scroll_menu');
					top_menu.removeClass('scroll_menu');
					pricing.removeClass('pricing_padding_top');
					features.removeClass('pricing_padding_top');
					main.addClass('main_cont_margin');

					empty_div.css('height','0px');
				ticking = false;
				});
			}
			else if($(this).scrollTop() >= 80 && ticking == false){
				ticking = true;
				empty_div.css('height','70px');
				nav_a.addClass('navbar_a_color');
				nav_but.addClass('navbar_but_color');
				nav_img.attr('src','img/Links/logo_dark.png');
				nav.addClass('navbar_fixed').animate({height:'70px'}, 300);
				scroll_menu.addClass('scroll_menu');
				top_menu.addClass('scroll_menu');
				pricing.addClass('pricing_padding_top');
				features.addClass('pricing_padding_top');
				main.removeClass('main_cont_margin');
			}
		}
	})
	// });

 
	window.onbeforeunload = function () {
  		window.scrollTo(0, 0);
  		var images = $('img');
	    images.each(function(i) {
	      $(this).width($(this).width() / 2);
	    });
	}


		// Add smooth scrolling to all links
    $("a").on('click', function(event) {

		    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		    event.preventDefault();

		      // Store hash
		    var hash = this.hash;

		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		    $('html, body').animate({
		        scrollTop: $(hash).offset().top
		    }, 800, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        window.location.hash = hash;
		    });
	    } // End if
	});

	$('.select_box ul a').on('click',function(){
		$('.select_box button').text(this.text);
		$('.select_price1 span').text(this.text);
		$('.select_price2 span').text(this.text);
	})
})