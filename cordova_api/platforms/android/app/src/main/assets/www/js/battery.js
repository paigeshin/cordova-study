document.addEventListener("deviceready", batteryStatus, false);

function batteryStatus() {

	$(function(){

		window.addEventListener("batterystatus", onBatteryChange, false);

		function onBatteryChange(info) {
		    $('#BatteryEvent').html('Battery Status');
		    $('#BatteryLevel').html( info.level );
		    $('#BatteryPlugged').html( info.isPlugged );
		}

		window.addEventListener("batterylow", onBatteryLow, false);

		function onBatteryLow(info) {
		    $('#BatteryEvent').html('Battery Low');
		    $('#BatteryLevel').html( info.level );
		    $('#BatteryPlugged').html( info.isPlugged );
		}

		window.addEventListener("batterycritical", onBatteryCritical, false);

		function onBatteryCritical(info) {
		    $('#BatteryEvent').html('Battery Critical');
		    $('#BatteryLevel').html( info.level );
		    $('#BatteryPlugged').html( info.isPlugged );
		}

	});

}