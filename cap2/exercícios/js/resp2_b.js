function preco(){
    //cria referência ao elemento da página
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outPreco = document.getElementById("outPreco");

    //obtem o conteudo do campo de entrada
    var valor = Number(inValor.value);// valor por 15 minutos
    var tempo = Number(inTempo.value);// tempo de uso
    //calcula o valor a ser pago pelo cliente
    var precoCliente = Math.ceil(tempo / 15) * valor;// math.ceil arredonda pra cima

    //altera o conteudo da linha de resposta
    outPreco.textContent = "O valor a pagar R$: " + precoCliente.toFixed(2);
}
//Cria referência ao botão clicar
var outPreco = document.getElementById("calcula");
//registra um evento associado ao botão pra carregar uma função
outPreco.addEventListener("click",preco);