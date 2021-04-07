function converte(){
    //Cria referencia aos elementos da página
    var inputTitulo = document.getElementById("inTitulo");//
    var inputTempoMinutos = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //obtem conteudos do campo de entrada
    var titulo = inputTitulo.value;
    var tempo = inputTempoMinutos.value;
    //se o tempo em minutos digitado for negativo tempo recebe 0
    if(tempo < 0){
        tempo = 0;
    }
    var horas = parseInt(tempo/60);
    var resto = tempo % 60;// soma o resto 
    
    outTitulo.textContent = titulo;
    outResposta.textContent = " " + horas + " horas " + resto  +" minutos "  ;
}

var convertido = document.getElementById("converter");
convertido.addEventListener("click",converte);