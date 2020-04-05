document.addEventListener("deviceready", accelerometerAPI, false);

function accelerometerAPI() {

	$(function(){

		function onSuccess(acceleration) {
		    $('#X').html(	  acceleration.x 		 );
		    $('#Y').html(	  acceleration.y 		 );
		    $('#Z').html(     acceleration.z 		 );
		    $('#stamp').html( new Date(acceleration.timestamp) );
		}

		function onError() {
		    $('#X, #Y, #Z, #stamp').html('Error!!');
		};

		$('#GetValues').on('touchend',function(){

			navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

		});

		var watchID;

		$('#WatchValues').on('touchend',function(){

			watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 100  } );

		});

		$('#StopWatching').on('touchend',function(){

			if (watchID) {
				navigator.accelerometer.clearWatch(watchID);
				watchID = null;
			}

			$('#X, #Y, #Z, #stamp').html('');

		});

	});

}