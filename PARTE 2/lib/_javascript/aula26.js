
$(document).ready(function(){
    $("#tabelaFilmes thead tr th").each(function(i){
        var n = i + 1;
        var nomeColuna = $(this).text();
        //Destacando Células e apresentando tooltips
        $("tr td:nth-child("+ n +")").hover(function(){
            var nomeCelula = $(this).text();
            $(this).addClass("destaque")
            .prepend("<div class='tooltip'>Coluna: "+ nomeColuna +"<br/>Celula: "+ nomeCelula +"</div")
            $(this).click(function(){
                $("tbody tr").removeClass("destaque");
                $(".tooltip").remove();
                $("tbody tr:contains("+ nomeCelula +")").addClass("destaque");
            });
        }, function(){
            $(this).removeClass("destaque")
            $(".tooltip").remove();
        });

    });
        //Trocar o cursor do mouse para click
        $("#tabelaFilmes thead tr th").prepend("<span>+</span>").css("cursor","pointer");
        //Efeito destaque colunas
        $("#tabelaFilmes thead tr th").each(function(i){
            var n = i;
            $(this).click(function(){
                $("td").removeClass("destaque");
                $(this).parents("thead").siblings("tbody").children("tr").each(function(){
                    $(this).children("td:eq("+n+")").addClass("destaque");
                });
            });

        });

        //Ocultar e exibir linhas da tabela
    $("tbody tr:not(.sub)").hide();
    $(".sub th").prepend("<img class='maisMenos' src='lib/_imagens/mais.png'/>");
    $(".maisMenos").css("cursor","pointer");//Trocar o cursor do mouse para click
    $("img").click(function(){
        debugger;
        if($(this).attr("scr") == "lib/_imagens/menos.png"){
            $(this).attr("scr","lib/_imagens/mais.png").parents().siblings("tr").hide();
        }
        else{
            $(this).attr("scr","lib/_imagens/menos.png").parents().siblings("tr").show();
        }
    });

});
