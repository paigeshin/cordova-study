document.addEventListener("deviceready", compassAPI, false);

function compassAPI() {

    $(function(){

    	function compassSuccess(heading) {
		    $('#NeedleTrue').css('-webkit-transform', 'rotate('+ heading.trueHeading + 'deg)');
		    $('#NeedleMagnetic').css('-webkit-transform', 'rotate('+ heading.magneticHeading + 'deg)');
		    $('#compassAccuracy').html( heading.headingAccuracy );
		    $('#compassStamp').html( new Date(heading.timestamp) );
		};

		function compassError(error) {
		    alert('CompassError: ' + error.code);
		};

		$('#GetHeading').on('touchend',function(){

			navigator.compass.getCurrentHeading(compassSuccess, compassError);

		});

		var watchCompass = false;

		$('#WatchHeading').on('touchend',function(){

			if( watchCompass === false ) {
				watchCompass = navigator.compass.watchHeading(compassSuccess, compassError, { 'frequency': 20 /*, 'filter':50 */ } );
			}

		});

		$('#StopHeading , #compassClose').on('touchstart',function(){

			if( watchCompass !== false ) {
				navigator.compass.clearWatch(watchCompass);
				watchCompass = false;
			}

		});

		$('#StopHeading , #compassClose').on('touchend',function(){

			$('#NeedleTrue , #NeedleMagnetic').removeAttr('style')
			$('#compassAccuracy , #compassStamp').html('...');

		});
	  
	});

}