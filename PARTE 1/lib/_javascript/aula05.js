    //Utilizando JQuery
$(document).ready(function(){
    //descendente
    $("div span").css("background-color", "yellow");

    //filhos do elemento
    $("li > ul").css("background-color", "red");

    //irmãos do elemento
    $("#item1_1 ~ li").css("background-color", "blue");
});