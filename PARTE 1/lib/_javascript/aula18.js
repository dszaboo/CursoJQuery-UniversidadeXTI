$(document).ready(function(){
    /*$(":text").keyup(function(e){
        $("#msg").text($(this).val());
    });*/

    //Equivalente ao de cima !
    /*$(":text").bind("keyup",function(e){
        $("#msg").text($(this).val());
    });*/

    //Outra Forma de usar o bind
    function msg(e){
        $("#msg").text($(this).val());
    }
    //$(":text").keyup(msg).focus(msg).blur(msg);
    $(":text").bind("keyup focus blur",msg);

    $(":button").bind("click",function(e, src, width){
        //$(":text").unbind("keyup", msg);//unbind desvincula os eventos informados, no caso keyup
        //$(":text").val("Texto incluído via JQuery");
        //$(":text").trigger("focus");
        //$("fieldset").delegate(":text", "keyup",msg); //Delega funções ao campo adicionado pelo prepend
        //$("fieldset").prepend("Outro: <input type='text' name='outro'/>");
        $("#msg").append($("<img/>").attr("src",src).css("width", width))

    });
    $(":button").trigger("click", ["lib/_imagens/imagem.jpg","190px"]);
});