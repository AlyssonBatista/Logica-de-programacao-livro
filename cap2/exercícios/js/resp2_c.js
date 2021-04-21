function caixa(){
    //cria referência referência ao elemento da página
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outResposta1 = document.getElementById("outResposta1");
    var outResposta2 = document.getElementById("outResposta2");

    //obtém conteúdo dos campos de entrada
    var produto = inProduto.value;
    var preco = inPreco.value;

    //calcula a promoção
    var promocao = (2 * preco) + (preco/2);
    
    //altera o conteúdo das linhas de resposta
    outResposta1.textContent = produto + " - " + "Promoção: Leve 3 por R$: " + promocao;
    outResposta2.textContent = "O 3º produto custa apenas R$: " + (preco/2);
};
//cria referência ao botão 
var button = document.getElementById("processamento");
//registra um evento associado ao botão pra carrega uma função
button.addEventListener("click",caixa);