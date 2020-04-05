document.addEventListener("deviceready", inAppBrowserAPI, false);

function inAppBrowserAPI() {

	$(function(){

		$('#openNormal').on('touchend',function(){

			window.open('http://www.cartoonsmart.com/', '_system');

		});

		$('#openWin').on('touchend',function(){

			window.open('http://www.cartoonsmart.com/', '_blank');

		});

		//Boolean Value를 잘 확인하자
		$('#openWithOptions').on('touchend',function(){

			var optionsArr = [
				// For all OS's
				'location=no',
				
				// For Android, iOS & Windows Phone only
				'hidden=yes',
				
				// Android and iOS only
				'clearcache=yes',
				'clearsessioncache=yes',
				
				// iOS only
				// Transition style options are fliphorizontal, crossdissolve or coververtical (Default)
				'transitionstyle=fliphorizontal',
				'toolbar=yes',
				'closebuttoncaption=Exit',
				// Tool bar position options are top or bottom (Default)
				'toolbarposition=top',
				'disallowoverscroll=yes',
				'enableViewportScale=yes',
				'mediaPlaybackRequiresUserAction=yes',
				'allowInlineMediaPlayback=yes',
				'keyboardDisplayRequiresUserAction=no',
				'suppressesIncrementalRendering=yes',
				// Presentation style options are pagesheet, formsheet or fullscreen (Default)
				'presentationstyle=formsheet',

				// Android only
				'zoom=no',
				'hardwareback=no',
				
				// Windows only
				// If location is set to no there be no control presented to user to close IAB window.
				'fullscreen=yes'
			];

			var options = optionsArr.join();

			var browserOptions = window.open('http://www.cartoonsmart.com/', '_blank', options );

			browserOptions.show();

		});

		//Event Handling
		function BrowserCallback( event ) {
     		console.log(event, event.type, event.url);
     	}

		$('#openWithEvents').on('touchend',function(){

			var eventfulBrowser = window.open('http://www.cartoonsmart.com/', '_blank');

			eventfulBrowser.addEventListener('loadstart', BrowserCallback);
         	eventfulBrowser.addEventListener('loadstop',  BrowserCallback);
         	eventfulBrowser.addEventListener('loaderror', BrowserCallback);
         	eventfulBrowser.addEventListener(  'exit',	  BrowserCallback);

		});

		$('#openCloseWin').on('touchend',function(){

			var browserClose = window.open('http://www.cartoonsmart.com/', '_blank');

			setTimeout(function(){
				browserClose.close();
			},3000);

		});

		$('#passCSS').on('touchend',function(){

			var browserCSS = window.open('http://www.cartoonsmart.com/', '_blank');

			browserCSS.addEventListener('loadstop',  function(){
				
				browserCSS.insertCSS(
					
					{ file: 'styles.css' }

				);

				browserCSS.insertCSS(
					
					{ code: 'body #mobile-header { background-color:black; }' }

				);
			});

		});


		$('#passJS').on('touchend',function(){

			var browserJS = window.open('http://www.cartoonsmart.com/', '_blank');

			browserJS.addEventListener('loadstop',  function(){
				
				browserJS.executeScript(
					
					{ file: 'Cartoonsmart.js', }

				);

				browserJS.executeScript(
					
					{ code: 'alert("YUP");' }

				);

			});

		});



	});

}