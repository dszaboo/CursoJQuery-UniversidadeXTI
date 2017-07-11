
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
});