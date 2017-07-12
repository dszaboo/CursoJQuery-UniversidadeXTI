
$(document).ready(function(){
    //Dicas de preenchimento de formulário
    $(":input + span").css({
        display:"none",
        border:"1px solid #000",
        padding:"2px 4px",
        background:"#DDD",
        marginLeft:"10px"
    });
    $(":input").focus(function(){
        $(this).next().fadeIn(1000);
    }).blur(function(){
        $(this).next().fadeOut(1000);
    });
});
