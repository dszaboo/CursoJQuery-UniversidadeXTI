
$(document).ready(function(){
        //Efeito Zebra na tabela
    //Só as linhas impares.
    $("#tabelaFilmes tbody tr:odd").addClass("impar");

    //Só as linhas de 2 em 2.
    ///$("#tabelaFilmes tbody tr:nth-child(4n+1)").addClass("impar");
    //$("#tabelaFilmes tbody tr:nth-child(4n)").addClass("impar");

        //Efeito Destaque nas linhas selecionadas
    $("#tabelaFilmes tbody tr").hover(
        function(){
            $(this).addClass("destaque");
        },
        function(){
            $(this).removeClass("destaque");
        }
    );

        $("#tabelaFilmes thead tr th")
        .prepend("<span>+</span>")
        .css("cursor","pointer");
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
