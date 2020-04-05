document.addEventListener("deviceready", consoleReady, false);

function consoleReady() {

    $(function(){

    	$('#Console1').on('touchend', function(){
			console.log("logged a string");
		});

		$('#Console2').on('touchend', function(){
			console.log( "string", 2 );
		});

		$('#Console3').on('touchend', function(){
			console.log( {"object":"Yup", "Num": 10} );
		});

		$('#Console4').on('touchend', function(){
			console.log( [ 1,"String",{"OBJ":"YUP!"},[1,2,3] ] );
		});

		$('#Console5').on('touchend', function(){
			var Log = [ 1,"String",{"OBJ":"YUP!"},[1,2,3] ];
			console.log( Log );
		});
	  
	});

}