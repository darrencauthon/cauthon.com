
		$(function() {
			var state = true; 
			var zahl1=1; 	// Screen1 home
			var zahl2=0; 	// Screen2 about-me
			var zahl3=0; 	// Screen3 portfolio
			var zahl4=0; 	// Screen4 blog
			
			var center=-0;
			var richtung="-3000px";

			
			$( "#nav-home" ).click(function() { 
				$('#home').css('display', 'block'); 
			//	$('#wrapper').css('background-image', 'url(images/gallery/paralax1.jpg)');
				if (zahl2==1) {	$('#about-me').css('display', 'block'); } else { $('#about-me').css('display', 'none'); }
				if (zahl3==1) {	$('#portfolio-mobil').css('display', 'block'); } else { $('#portfolio-mobil').css('display', 'none'); }	
				if (zahl4==1) {	$('#blog').css('display', 'block'); } else { $('#blog').css('display', 'none'); }
				zahl1=1;
				zahl2=0;
				zahl3=0;
				zahl4=0;	


				$( "#home" ).animate({
					right: center
				}, 1200 );
				$( "#about-me" ).animate({ 
					right: richtung
				}, 800 );
				$( "#portfolio-mobil" ).animate({ 
					right: richtung
				}, 800 );
				$( "#blog" ).animate({ 
					right: richtung
				}, 800 );
				
				$( '.nav-inner-home' ).animate({
					opacity: '0'
				}, 800 ); 
				
				$( '.nav-inner-about, .nav-inner-portfolio, .nav-inner-blog' ).animate({
					opacity: '1'
				}, 800 );  
			});
															
			$( "#nav-about" ).click(function() { 
				$('#about-me').css('display', 'block'); 
			//	$('#wrapper').css('background-image', 'url(images/gallery/paralax2.jpg)');
				if (zahl1==1) {	$('#home').css('display', 'block'); } else { $('#home').css('display', 'none'); }
				if (zahl3==1) {	$('#portfolio-mobil').css('display', 'block'); } else { $('#portfolio-mobil').css('display', 'none'); }	
				if (zahl4==1) {	$('#blog').css('display', 'block'); } else { $('#blog').css('display', 'none'); }
				zahl1=0;
				zahl2=1;
				zahl3=0;
				zahl4=0;
				
				$( "#home" ).animate({
					right: "3000px"
				}, 800 );
				$( "#about-me" ).animate({ 
					right: 0
				}, 1200 );
				$( "#portfolio-mobil" ).animate({ 
					right: "-3000px"
				}, 800 );
				$( "#blog" ).animate({ 
					right: "-3000px"
				}, 800 );		
				
				$( '.nav-inner-about' ).animate({
					opacity: '0'
				}, 800 ); 
				
				$( '.nav-inner-home, .nav-inner-portfolio, .nav-inner-blog' ).animate({
					opacity: '1'
				}, 800 ); 
			});
			
			$( "#nav-portfolio" ).click(function() {  
				$('#portfolio-mobil').css('display', 'block'); 
			//	$('#wrapper').css('background-image', 'url(images/gallery/paralax3.jpg)');
				if (zahl1==1) {	$('#home').css('display', 'block'); } else { $('#home').css('display', 'none'); }
				if (zahl2==1) {	$('#about-me').css('display', 'block'); } else { $('#about-me').css('display', 'none'); }	
				if (zahl4==1) {	$('#blog').css('display', 'block'); } else { $('#blog').css('display', 'none'); }
				zahl1=0;
				zahl2=0;
				zahl3=1;
				zahl4=0;
				
				$( "#home" ).animate({ 
					right: "3000px"
				}, 800 );
				$( "#about-me" ).animate({ 
					right: "3000px"
				}, 800 );
				$( "#portfolio-mobil" ).animate({ 
					right: 0
				}, 1200 );	
				$( "#blog" ).animate({ 
					right: "-3000px"
				}, 800 );	
				
				$( '.nav-inner-portfolio' ).animate({
					opacity: '0'
				}, 800 ); 
				
				$( '.nav-inner-home, .nav-inner-about, .nav-inner-blog' ).animate({
					opacity: '1'
				}, 800 ); 
			}); 
			
			$( "#nav-blog" ).click(function() {  
				$('#blog').css('display', 'block'); 
			//	$('#wrapper').css('background-image', 'url(images/gallery/paralax1.jpg)');
				if (zahl1==1) {	$('#home').css('display', 'block'); } else { $('#home').css('display', 'none'); }
				if (zahl2==1) {	$('#about-me').css('display', 'block'); } else { $('#about-me').css('display', 'none'); }	
				if (zahl3==1) {	$('#portfolio-mobil').css('display', 'block'); } else { $('#portfolio-mobil').css('display', 'none'); }
				zahl1=0;
				zahl2=0;
				zahl3=0; 
				zahl4=1;
				
				$( "#home" ).animate({ 
					right: "3000px"
				}, 800 );
				$( "#about-me" ).animate({ 
					right: "3000px"
				}, 800 );
				$( "#portfolio-mobil" ).animate({ 
					right: "3000px"
				}, 800 );
				$( "#blog" ).animate({ 
					right: center
				}, 1200 );	
				
				$( '.nav-inner-blog' ).animate({
					opacity: '0'
				}, 1000 ); 
				
				$( '.nav-inner-home, .nav-inner-about, .nav-inner-portfolio' ).animate({
					opacity: '1'
				}, 1000 ); 
				
				//	$('#nav-home .icon-home, #nav-about .icon-user, #nav-portfolio.icon-lightbulb').css('text-shadow', 'none');
			}); 

			

			
			$( ".open-button-vita" ).click(function() {  
				$('#about-me').css('display', 'block');
				$('#vita').css('display', 'block');
				
				$('.skills').css('display', 'none');
				$('#say').css('display', 'none');
			
				$( '#vita' ).animate({
					left: '0px'
				}, 1400 ); 
			
				$( '.skills' ).animate({
					left: '-3000px'
				}, 10 ); 
			
				$( '#say' ).animate({
					left: '-3000px'
				}, 10 ); 
				$( '#about-nav' ).animate({
					top: '-2000px'
				}, 500 ); 
			}); 
			
			$( "#vita .top-button" ).click(function() {  
				$( '#vita' ).animate({
					left: '-6000px'
				}, 500 ); 
				$( '#about-nav' ).animate({
					top: '0px'
				}, 1400 ); 
			}); 		
		
			$( ".open-button-skills" ).click(function() {  
				$('#skills').css('display', 'block');
				
				$('.vita').css('display', 'none');
				$('#say').css('display', 'none');
			
				$( '#skills' ).animate({
					left: '0px'
				}, 1400 ); 
			
				$( '#vita' ).animate({
					left: '-6000px'
				}, 10 ); 
			
				$( '#say' ).animate({
					left: '-3000px'
				}, 10 ); 
				$( '#about-nav' ).animate({
					top: '-2000px'
				}, 1000 ); 
			});  
			
			$( "#skills .top-button" ).click(function() {  
							
				$( '#skills, .skills-inner' ).animate({
					left: '-3000px'
				}, 500 ); 
				$( '#about-nav' ).animate({
					top: '0px'
				}, 1400 ); 
			}); 
			



			
			$( ".open-button-say" ).click(function() { 	
				$('#say').css('display', 'block');
				
				$('.skills').css('display', 'none');
				$('#vita').css('display', 'none');			
				$( '#say' ).animate({
					left: '0px'
				}, 1400 );   
			
				$( '#vita' ).animate({
					left: '-6000px'
				}, 1 ); 
			
				$( '#skills' ).animate({
					left: '-3000px'
				}, 1 ); 
				$( '#about-nav' ).animate({
					top: '-2000px'
				}, 500 );
			}); 			

			
			$( "#say .top-button" ).click(function() {  
							
				$( '#say' ).animate({
					left: '-3000px'
				}, 500 ); 
							
				$( '#about-nav' ).animate({
					top: '0px'
				}, 1400 );
			}); 		

			
			
			$( "#content-portfolio .top-button" ).click(function() {  
							
				$( '#options' ).animate({
					left: '0px'
				}, 500 ); 
			}); 


			$( ".open-button-latest" ).click(function() {  
				$('#left-blog').css('display', 'block');
				$('#blog-nav').css('display', 'none');
				$('#right-blog').css('display', 'none');
			
				$( '#left-blog' ).animate({
					left: '0px'
				}, 1300 ); 
				$( '#blog-main-nav' ).animate({
					top: '-3000px'
				}, 1000 ); 
			}); 
			
			$( "#left-blog .top-button" ).click(function() {  
				$( '#left-blog' ).animate({
					left: '-3000px'
				}, 500 ); 
				$( '#blog-main-nav' ).animate({
					top: '0px'
				}, 1300 ); 
			}); 


			$( "#blog a" ).click(function() {  
				$('#left-blog').css('display', 'block');
				$('#blog-nav').css('display', 'none');
				$('#right-blog').css('display', 'block');
			
				$( '#left-blog' ).animate({
					left: '-3000px'
				}, 1300 ); 
				$( '#right-blog' ).animate({
					left: '0px'
				}, 1000 ); 
			}); 
			
			$( "#right-blog .top-button" ).click(function() {  
				$( '#left-blog' ).animate({
					left: '0px'
				}, 1300 ); 
				$( '#right-blog' ).animate({
					left: '3000px'
				}, 1000 ); 
			}); 
			

			
		});				
		/* ====== Stlye Selector ====== */

		$(document).ready(function() {
		
			if((navigator.userAgent.match(/SAFARI/i)) || (navigator.userAgent.match(/CHROME/i))) {
		

			var xAngle = 15,
			yAngle = 15;

			//	jQuery('#right-button-rotate').css('-webkit-transform', "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
		
			$("#style-switcher").hover(function() {
				var el = $(this);
				$("#style-switcher").stop(false, false).animate({
					left: "0px"
				}, {
					queue: false,
					duration: 300
				});
				jQuery("#right-button-rotate").css('-webkit-transform', "rotateX(" + '180' + "deg) rotateY(" + '180' + "deg)");
				$('#right-button-rotate').css('margin-top', '-10px');
			}, function() {
				var el = $(this);
				$("#style-switcher").stop(true, true).animate({
					left: "-235px"
				}, {
					queue: false,
					duration: 300
				});
				jQuery("#right-button-rotate").css('-webkit-transform', "rotateX(" + '0' + "deg) rotateY(" + '0' + "deg)");
				$('#right-button-rotate').css('margin-top', '0px');
			});
			

		}
			
		else { 
		
			$("#style-switcher").hover(function() {
				var el = $(this);
				$("#style-switcher").stop(false, false).animate({
					left: "0px"
				}, {
					queue: false,
					duration: 300
				});
				$("#right-button-rotate").stop(false, false).animate({
					rotate: "180",
					top:"-10px"
				}, {
					queue: false,
					duration: 700
				});
			}, function() {
				var el = $(this);
				$("#style-switcher").stop(true, true).animate({
					left: "-235px"
				}, {
					queue: false,
					duration: 300
				});
				$("#right-button-rotate").stop(false, false).animate({
					rotate: "0",
					top:"0px"
				}, {
					queue: false,
					duration: 700
				});
			});
			
			} 
			
		});

	
	
	
	
	
	
	
	
	
	
	