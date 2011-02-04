/*!
 * jQuery Working (Spinner) Indicator Plugin
 * version: 1.0 (2010-04-19)
 * @requires jQuery v1.3.2 or later
 *
 * Author: Keith Hoffmann @ http://kiloproductions.net
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
/*
//Needs some CSS for the spinner. This should be the minimum
.working-status {
	width: 16px;
	height: 16px;
	display: inline-block;
	background: url(../images/loading.gif) no-repeat center center;
}
.working-bg {
	background: url(../images/loading.gif) no-repeat center center;
}

$('#some_elemenet).show_working('before');
$('#some_elemenet).hide_working();
*/
;(function($) {
	//show a working indicator near an element
	$.fn.show_working = function(where, padding){
		//prevent an element from having more than 1 working indicator
		if( $(this).attr('data-working') ) $(this).hide_working();
		
		var working_class = 'working-status',
			background_class = 'working-bg',
			pd = padding || 0,
			id = makeid(5);
			
		$ld = $('<div />',{
			'class': working_class,
			'id': id
		});
		
		$ld.css({
			position: "absolute",
			top: $(this).offset().top + (($(this).outerHeight()/2) - 8),
			left: $(this).offset().left
		});
		
		switch(where){
			//sets it as the background
			case 'background':
				$(this).addClass(background_class);
			break;
			//places before element. Pass padding to include padding
			case 'before':
				$ld.css('left', $(this).offset().left - 16 - pd);
				$('body').append($ld);
			break;
			//places after element. Pass padding to include padding
			case 'after':
				$ld.css('left', $(this).offset().left + $(this).outerWidth() + pd);
				$('body').append($ld);
			break;
			//replaces the element completely with spinner. Non-recoverable
			case 'replace':
				$ld.css({
					width: $(this).outerWidth(),
					height: $(this).outerHeight(),
					top: $(this).offset().top
				});
				$(this).replaceWith($ld);
			break;
			//hides the element while working (replaces), element is shown again when done. Recoverable
			case 'hide':
				$ld.css({
					width: $(this).outerWidth(),
					height: $(this).outerHeight(),
					top: $(this).offset().top
				});
				$('body').append($ld);
				$(this).addClass('working-hide');
			break;
			//disables the button and give it a background-looking element
			case 'disable':
				$ld.css({
					height: $(this).outerHeight(),
					top: $(this).offset().top,
					left: $(this).offset().left+pd
				});
				$('body').append($ld);
				$(this).addClass('working-disable').fadeTo(300, 0.75);
				$(this).attr('disabled', true);
			break;
		}
		//link the id of the indicator
		$(this).attr('data-working', id);
		$ld.show();
		
	};
	//removes the spinner. Restores hidden element
	$.fn.hide_working = function(){
		$ld = $( '#'+$(this).attr('data-working') );
		
		//returns the hidden element
		if( $(this).hasClass('working-hide') ){
			$(this).removeClass('working-hide');
		}
		//returns the hidden element
		if( $(this).hasClass('working-disable') ){
			$(this).removeClass('working-disable').removeAttr('disabled').fadeIn(300);
		}
		//if set to backgorund
		if( $(this).hasClass('working-status') ){
			$(this).removeClass('working-status');
		}
		//if set to backgorund
		if( $(this).hasClass('working-bg') ){
			$(this).removeClass('working-bg');
		}
		
		if($ld.length > 0){
			$ld.remove();
		}
		$(this).removeAttr('data-working')
	};
	
})(jQuery);

function makeid(ln){
	var text = "";
	var possible = "abcdefghijklmnopqrstuvwxyz";
	for( var i=0; i < ln; i++ )
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}