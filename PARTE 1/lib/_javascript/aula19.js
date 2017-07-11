$(document).ready(function(){
    //Função Hide = esconde um objeto, deixa oculto
    $("button#hide").click(function(){
        $("div#msg").hide("slow");//normal,fast,slow
    });

    //Funcão Show = mostra um objeto escondido
    $("button#show").click(function(){
        $("div#msg").show("slow");//normal,fast,slow
    });

    //Funcão Show = alterna entre mostar e esconder
    $("button#toggle").click(function(){
        $("div#msg").toggle("slow");
    });
});