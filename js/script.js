
// //var nome = "Ruan";
// //let nome2 = "Boris";

// //Regra 1 : INICIALIZAR NA DESCLARAÇÃO;
// //Regra 2 : NÃO ALTERAR O SEU VALOR DURANTE O FLUXO DO PROGRAMA;

// //var nome1 = "Petroni";

// //if(nome1 != ""){
// //    let nome1 = "Geovana";
// //

// //console.log(nome1);


// let botao = document.getElementById("meu-btn");
// //console.log(botao.textContent);


// botao.addEventListener("click", function(){ 
//     // console.log(botao.textContent);
//     //Função matemática Math
//     //random  = Retorna um número aleatório entre 0 e 1 Ex: 0.2282632765;
//     //floor = Ela arredonda um número para baixo
//     // ceil = Ela arredonda um número para cima
//     //round = Ela arredonda um número para aleatoriamente.

//     let r=0,g=0,b=0;
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);
    
//     //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
// this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// } );


// //ESTUDAR
// //querySelector
// //querySelectorAll
// //Array
// //Estruturas de 

// //Declarar um Araay
// let frutas ["banana", "maca", "pessego", "laranja", "melancia","Kiwi"]
// console.log(frutas);
// console.table(frutas);
// console.log(frutas[0]);
// console.log(frutas[6]);

// //deseja um Item final do array com o metodo push(nomeDoItem)
// frutas.push("manga");
// console.log(frutas);

// //resmover um Item do array com o metodo pop();
// frutas.pop();
// console.log(frutas);

// //remover umItem ao final do array com o metodo shift();
// frutas.shift();
// console.log(frutas);


// // // localizar um Item no array ultilizando o metodo IndexOf(NomeDoItem)
// // // let Idice = frutas.indexOf
// // // console.log("o indice encontado foi :$(indice");
// // /// console.log('o intem buscado foi : $(futras)[indice]);

// // // realizando uma remocao de item ultilizando o metodo splice():
// // // o metodo splice() recebe dois parametros, indice do item do que sera removido e a 
// // // quantidade de vezes que este mesmo item sera removido. Ex: $(frutas[indice])}');


// //Dica: utilize o metodod index() para buscar o indice do item no array.




// let indice = frutas.indexOf("melancia");

//console.log(`o item rencontrado no indice antes da remocao foi : ${ frutas[indice]}`);

// frutas.splice(indice,1);

// console.log(frutas);

// console.log(`o item rencontrado no indice depois da remocao foi : ${ frutas[indice]}`);




//concatenacao de arrays;

let nr1 = [1,2,3,4,5];

let nr2 = [6,7,8,9,10];

console.log("array 1 : " + nr1);

console.log("array 2 : " + nr2);


//concatenando os dois arrays em um novo array.  com o operador SPREAD(...)

let nr3 = [...nr1,...nr2];

console.log("array 3 : " + nr3);

nr3.forEach( (nr)=>{
  console.log ('Item do Array 3 : ${nr}');
    });
