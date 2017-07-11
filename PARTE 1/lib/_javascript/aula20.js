/*EFEITOS FADING -> OPACIDADE
    fadeIn() -> Deixa opaco
    fadeOut() -> Deixa Transparente
    fadeTo() -> Atinge certa opacidade indicada -> 50% exemplo
    fadeToggle() ->Deixa opaco e transparente, alterna entre os 2

EFEITOS SLIDING -> Corrediços
    slideUp() -> Fecha pra cima
    slideDown() -> Abre pra baixo
    slideToggle() -> Fecha e Abre, alterna entre os 2

PARAMETROS
    normal, fast, slow, milisegundo
*/
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