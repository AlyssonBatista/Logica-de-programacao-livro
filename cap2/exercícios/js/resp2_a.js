function desconto(){
   
    //Cria referência ao elemento da página
    var inMedicamento = document.getElementById("inNomeMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outDesconto = document.getElementById("outDesconto");
    var outNome = document.getElementById("outNome");

    //obtém conteúdos dos campos de entrada
    var nome = inMedicamento.value;
    var preco = Number(inPreco.value);

    //calcula o desconto do cliente
    var desconto = parseInt(preco) * 2;
    
    //altera o conteúdo da linha de resposta
    outNome.textContent = "Promoção de " + nome; 
    outDesconto.textContent = "Leve 2 por apenas R$: " + desconto.toFixed(2)
}
//cria referência ao botão clicar
var promocao = document.getElementById("processamentoPreco");
//registra um evento associado ao botão pra carregar uma função
promocao.addEventListener("click",desconto);
