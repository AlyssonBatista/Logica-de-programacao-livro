function mostrarOla(){
    var inputNome = document.getElementById("nome"); // obtem o nome da pessoa 
    var nome = inputNome.value; 
    document.getElementById("resposta").textContent = "olá " + nome;
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click",mostrarOla);