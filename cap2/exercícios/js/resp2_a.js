function desconto(){
    var inMedicamento = document.getElementById("inNomeMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outDesconto = document.getElementById("outDesconto");
    var outNome = document.getElementById("outNome");

    var nome = inMedicamento.value;
    var preco = Number(inPreco.value);
    var desconto = parseInt(preco) * 2;

    outNome.textContent = "Promoção de " + nome; 

    outDesconto.textContent = "Leve 2 por apenas R$: " + desconto.toFixed(2)
}

var promocao = document.getElementById("processamentoPreco");
promocao.addEventListener("click",desconto);
