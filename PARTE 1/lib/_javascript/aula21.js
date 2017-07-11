$(document).ready(function(){
    $("#fade").click(function(){
        //$("#msg").fadeOut(1000);
        //$("#msg").fadeIn(1000);
        //$("#msg").fadeTo(1000,0.3);//0-1
        $("#msg").fadeToggle(1000);
    });

    $("#slide").click(function(){
        //$("#msg").slideUp(1000);
        //$("#msg").slideDown(1000);
        $("#msg").slideToggle(1000);        
    });
});