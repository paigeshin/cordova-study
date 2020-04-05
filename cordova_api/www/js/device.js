//항상 deviceready event를 걸어줘야함
document.addEventListener("deviceready", deviceAPI, false);

function deviceAPI(){

    $(function(){
        $('#DeviceLog').on('touchend', function() {
            console.log(device);
            $('#Dev1').html(device.cordova);
            $('#Dev2').html(device.model);
            $('#Dev3').html(device.platform);
            // $('#Dev4').html(device.uuid);
            $('#Dev5').html(device.version);
        });
    });

}