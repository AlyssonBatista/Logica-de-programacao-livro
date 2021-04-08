function parcelamento(){

    var inputNome = document.getElementById("inNomeCarro");
    var inputPreco = document.getElementById("inPrecoCarro");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");
    var outParcela = document.getElementById("outParcela");

    var nome = inputNome.value;
    var preco = Number(inputPreco.value);
    var entrada = preco * 0.5;// podemos também dividir por 2
    var parcelamento = entrada / 12;
    
    outTitulo.textContent = "Promoção: " + nome;
    outResposta.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = " + 12x R$: " + parcelamento.toFixed(2);
 };

    var inputProcessamento = document.getElementById("inProcessamento");
    inputProcessamento.addEventListener("click",parcelamento);