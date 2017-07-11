    //Utilizando JQuery
$(document).ready(function(){
    //Seletor para todos elementos = * 
    //$("*").css("color","#0000FF");

    //Seletor por id = #
    $("#titulo").css("color","green");

    //Seletor por tag = tag
    $("a").css("color","red");
    
    //Seletor por classe =.nomeClasse
    $(".outro").css("color","black");

    //Seletor múltiplo
    $("h1, a").css("background-color","Yellow");

});
            
    //Utilizando JavaScript
window.onload =function(){
    document.getElementsByTagName("a")[0].onclick = alterarTitulo;
}

function alterarTitulo(){
    document.getElementById('titulo').style.color='#0000FF'
}