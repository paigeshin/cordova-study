document.addEventListener("deviceready", dialogsAPI, false);

function dialogsAPI(){

    $(function(){

        // function DialogReturned(msg) {
        //     $("#DialogReturn").html(msg);
        // }

        $("#OpenDialog").on("touched", function(){
            navigator.notification.alert(
                "You are the winner!",
                null,
                "Game Over",
                "Done"
            );
        });


    });


}