
$(document).ready(function(){
        //Efeito Zebra na tabela
    //Só as linhas impares.
    $("#tabelaFilmes tbody tr:odd").addClass("impar");

    $("#tabelaFilmes thead tr th").each(function(i){
        var n = i + 1;
        var nomeColuna = $(this).text();
        //Destacando Células e apresentando tooltips
        $("tr td:nth-child("+ n +")").hover(function(){
            var nomeCelula = $(this).text();
            $(this).addClass("destaque")
            .prepend("<div class='tooltip'>Coluna: "+ nomeColuna +"<br/>Celula: "+ nomeCelula +"</div")
            $(this).click(function(){
                
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

});
