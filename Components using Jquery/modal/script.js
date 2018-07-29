$(document).ready(() => {
	$(".mymodal").hide();
    $("#myBtn").click(function () {

      
       $('body').add().css("background-color","grey") && $(".mymodal").show();
    });

    $(".close").click(() => {


        $(".mymodal").hide()&& $('body').add().css("background-color","");
    });


    


});