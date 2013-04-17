	(function( $ ){
			var parentWidth, 
				centerTipArrow, 
				posLeft, 
				posTop;

			var defaults = { 
        		width: 200, 
        		top: 100
    		};

			$.fn.contentTip = function( options) {	
		
			//Define options we want to use
			var options = $.extend(defaults, options);

			return this.each(function(){
			var $this = $(this);
			$this.hover(function(){
				
				parentWidth = $this.width(); 

				posLeft = $this.offset().left;
				posTop = $this.offset().top;

				$('#wrapper').append('<div id="tip"></div>')

				//Cache .tip class 
				var $sel = {
					tip : $('#tip')
				}

				$sel.tip.css({
					width: defaults.width, 
					left: posLeft , 
					top: posTop - defaults.top	
				});

				$sel.tip.fadeIn();

				$sel.tip.text($this.text());

				//Tool tip arrow
				$sel.tip.prepend('<div id="tipArrow"></div>');

		    	centerTipArrow = ($sel.tip.width() / 2) ;

		    	$('#tipArrow').css({
		    		left: centerTipArrow
		    	});

				}, function(){
					//Remove all intances of the tool tip
					$('#tip').remove();
				});

			});

		};

	})(jQuery);	