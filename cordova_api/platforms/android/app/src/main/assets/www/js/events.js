//Android Activity Life Cycle, iOS View Life Cycle과 같은 것도 추적 가능하다.

document.addEventListener("deviceready", eventsAPI, false);

function eventsAPI() {

	$(function(){

		var paused = 0, resumed = 0, back = 0, volup = 0, voldown = 0, menu = 0, search = 0;

		document.addEventListener('pause', pause, false);

		function pause() {
			$('#paused').html( paused += 1 );
		}

		document.addEventListener('resume', resume, false);

		function resume() {
			$('#resumed').html( resumed += 1 );
		}

		// Android

		document.addEventListener("backbutton", backbtn, false);

		function backbtn() {
			$('#backEvent').html( back += 1 );
		}

		document.addEventListener('volumeupbutton', volumeup, false);

		function volumeup() {
			$('#volumeUp').html( volup += 1 );
		}

		document.addEventListener('volumedownbutton', volumedown, false);

		function volumedown() {
			$('#volumeDown').html( voldown += 1 );
		}

		// Android deprecated

		document.addEventListener('menubutton', menubtn, false);

		function menubtn() {
			$('#menuEvent').html( menu += 1 );
		}

		document.addEventListener('searchbutton', searchbtn, false);

		function searchbtn() {
			$('#searchEvent').html( search += 1 );
		}

	});

}