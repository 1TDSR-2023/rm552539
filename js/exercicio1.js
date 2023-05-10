//Questão 1
let tela = document.getElementById("meu-btn")

tela.addEventListener("click", function(){

    let r = 0, g = 0, b = 0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    let botao = document.querySelector("body");

    botao.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

//Questao 2
function contato() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let novoItem = document.createElement("li");
    let spanNome = document.createElement("span");
    let spanEmail = document.createElement("span");
    spanNome.textContent = nome;
    spanEmail.textContent = email;
    novoItem.appendChild(spanNome);
    novoItem.appendChild(document.createTextNode(" - "));
    novoItem.appendChild(spanEmail);

    let lista = document.getElementById("listaContatos");
    lista.appendChild(novoItem);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

})

//Questão 3
let botao2 = document.getElementById("meu-btn2");

botao2.addEventListener("click", function(){
    let img = document.querySelector("#img")
    img.setAttribute('src', 'img/lobo1.jpg');

})

//Questão 4
let botao3 = document.getElementById("meu-btn3");

botao3.addEventListener("click", function(){
    let mudar = document.querySelector("#var_p");
    mudar.textContent = "Hello World";
})

//Questão 5
let botao4 = document.getElementById("meu-btn4");

botao4.addEventListener("click", function(){
    let ocultar = document.querySelector("#img");
    ocultar.style.display = 'none';
})