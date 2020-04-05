document.addEventListener("deviceready", vibrationAPI, false);

function vibrationAPI() {

	$(function(){

		// iOS ignores vibrate time and is preset
		// WP8 min 1000ms to max 5000ms
		$('#VibrateNormal').on('touchend',function(){
			navigator.vibrate(1000);
		});

		// iOS and WP8 doesn't support vibrate pattern
		$('#VibratePattern').on('touchend',function(){
			navigator.vibrate([500,2000,500,1000,500,2000,1000]);
		});

		// Passing 0 or empty array [] or array with the value of [0] it will cancel
		// Is NOT supported on iOS
		$('#VibrateCancel').on('touchend',function(){
			navigator.vibrate([0]);
		});

	});

}