document.addEventListener("deviceready", networkAPI, false);

function networkAPI() {

	$(function(){

		$('#NetworkGet').on('touchend',function(){

			var networkState = navigator.connection.type;

		    var states = {};
		    states[Connection.UNKNOWN]  = 'Unknown connection';
		    states[Connection.ETHERNET] = 'Ethernet connection';
		    states[Connection.WIFI]     = 'WiFi connection';
		    states[Connection.CELL_2G]  = 'Cell 2G connection';
		    states[Connection.CELL_3G]  = 'Cell 3G connection';
		    states[Connection.CELL_4G]  = 'Cell 4G connection';
		    states[Connection.CELL]     = 'Cell generic connection';
		    states[Connection.NONE]     = 'No network connection';

		    $('#NetworkDisplay').html(states[networkState]);

		    console.log(networkState,states);

		});

		document.addEventListener("online", onOnline, false);

		function onOnline() {
		    $('#NetworkEvent').html('We\'re online!');
		}

		document.addEventListener("offline", onOffline, false);

		function onOffline() {
		    $('#NetworkEvent').html('Offline please connect...');
		}

	});

}