function check(){
    // Cria referenca ao elementos da página 
    var inputPreco = document.getElementById("inPreco");  
    var inputGramas = document.getElementById("inGramas");   
    var outResposta = document.getElementById("outValor"); 

    // OBTEM O CONTEUDO DOS CAMPOS DE ENTRADA
    var preco = parseFloat(inputPreco.value);
    var gramas = parseFloat(inputGramas.value);

    // CALCULA O VALOR A SER PAGO PELO CLIENTE
    var calculo = (preco * gramas)/1000;
    
    // Altera o conteudo da linha de resposta
    outResposta.textContent= "Valor a pagar R$: " + calculo;

     
};

    // Cria referência ao botão clicar
    var calcularPreco = document.getElementById("processamento");
    // Regista um evento associado ao botão pra carregar uma função
    calcularPreco.addEventListener("click",check);