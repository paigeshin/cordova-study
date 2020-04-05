document.addEventListener("deviceready", statusbarAPI, false);

function statusbarAPI() {

	$(function(){

		$('#OverlayFalse').on('touchend',function(){
			StatusBar.overlaysWebView(false);
		});

		$('#OverlayTrue').on('touchend',function(){
			StatusBar.overlaysWebView(true);
		});

		// iOS, Android and Windows Phone

		$('#StatusHide').on('touchend',function(){
			StatusBar.hide();
		});

		$('#StatusShow').on('touchend',function(){
			StatusBar.show();
		});

		$('#StatusToggle').on('touchend',function(){
			
			if(StatusBar.isVisible === true){
				StatusBar.hide();
			} else {
				StatusBar.show();
			}

		});

		// Android 5+, iOS and Windows Phone...

		$('#StatusColor').on('touchend',function(){
			/* black, darkGray, lightGray, white, gray, red, green, 
			   blue, cyan, yellow, magenta, orange, purple, brown */
			StatusBar.backgroundColorByName('blue');
		});

		$('#StatusColorHEX').on('touchend',function(){
			StatusBar.backgroundColorByHexString("#ff9462");
		});

		// iOS and Windows Phone

		$('#StatusDefault').on('touchend',function(){
			StatusBar.styleDefault();
		});

		$('#StatusLightContent').on('touchend',function(){
			StatusBar.styleLightContent();
		});

		$('#StatusBlackTranslucent').on('touchend',function(){
			StatusBar.styleBlackTranslucent();
		});

		$('#StatusBlackOpaque').on('touchend',function(){
			StatusBar.styleBlackOpaque();
		});

	});

}