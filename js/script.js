
//var nome = "Ruan";
//let nome2 = "Boris";

//Regra 1 : INICIALIZAR NA DESCLARAÇÃO;
//Regra 2 : NÃO ALTERAR O SEU VALOR DURANTE O FLUXO DO PROGRAMA;

//var nome1 = "Petroni";

//if(nome1 != ""){
//    let nome1 = "Geovana";
//

//console.log(nome1);


let botao = document.getElementById("meu-btn");
//console.log(botao.textContent);


botao.addEventListener("click", function(){ 
    // console.log(botao.textContent);
    //Função matemática Math
    //random  = Retorna um número aleatório entre 0 e 1 Ex: 0.2282632765;
    //floor = Ela arredonda um número para baixo
    // ceil = Ela arredonda um número para cima
    //round = Ela arredonda um número para aleatoriamente.

    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

} );


//ESTUDAR
//querySelector
//querySelectorAll
//Array
//Estruturas de repetição