		/* ---- USER AGENT ---- */	
	 	function checkBrowserName(name){  
			var agent = navigator.userAgent.toLowerCase();  
			if (agent.indexOf(name.toLowerCase())>-1) {  
				return true;  
			}  
			return false;  
		}  			
				window.onload = function browserMargin() {
					
						//	alert('test1');
					// Change: Internet Explorer
				if(checkBrowserName('MSIE')){ 
						$('.isotop-container').css('padding-bottom', '17px');
						
					}  
					
					// Change: MOZILLA		  
					if(checkBrowserName('firefox')){  
						$('.isotop-container').css('margin-bottom', '20px');
					}	
					// Change: CHROME		  
					if(checkBrowserName('chrome')){  
					  $('#vita-inner .antiscroll-inner').css('height', '100%'); 
					  $('#content-portfolio .antiscroll-inner').css('height', '100%');
					  $('#left-blog .antiscroll-inner').css('height', '100%');
					  $('#right-blog .antiscroll-inner').css('height', '1020px');
					} 
					// Change: SAFARI		  
					if(checkBrowserName('safari')){  
					  $('#vita-inner .antiscroll-inner').css('height', '100%'); 
					  $('#content-portfolio .antiscroll-inner').css('height', '100%');
					  $('#left-blog .antiscroll-inner').css('height', '100%');
					  $('#right-blog .antiscroll-inner').css('height', '1020px');
					} 
					//alert(screen);  
				}
		
