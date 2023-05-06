// // var nome1 = "Petroni";
// // // let nome2 = "Derick"; //let respeita o escopo
// // // const nome3 = "Ruan"; //Constante (imutavel)

// // // const PI = 3.14;

// // if(nome1 != ""){
// //     let nome1 = "Geovana";
// // }

// //let botao = document.getElementById("meu-btn"); //captura o botão
// // console.log(botao.textContent);

// //botao.addEventListener("click", function(){
//     // console.log(this.textContent);
//     //Função matemática Math
//     //random = retorna número aleatório entre 0 e 1 ex: 0.2412425;
//     //floor = arredonda um número para baixo.
//     //ceil = arredonda um número para cima.
//     //round = arredonda um número aleatoriamente.

//     //let r=0, g=0, b=0;
//     //r = Math.round(Math.random()*255);
//     //g = Math.round(Math.random()*255);
//     //b = Math.round(Math.random()*255);

//     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     //this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// }
// );

// //ESTUDAR
// //querySelector
// //querySelectorAll
// //Array
// //Estruturas de repetição

// //Declarar um Array
// let frutas = ["banana","maça","pêssego","laranja","limão","melancia","kiwi"];
// console.log(frutas);
// console.table(frutas);
// console.log(frutas[0]);
// console.log(frutas[6]);

// //inserir um item ao final do array com o metodo push(nomeDoItem);
// frutas.push("manga");
// console.log(frutas);


// frutas.unshift("pitaya");
// console.log(frutas);

// //remover um item ao final do array com o metodo pop();
// frutas.pop();
// console.log(frutas);

// //remover um item ao final do array com o metodo shift();
// frutas.shift();
// console.log(frutas);

// //localizar um item no array utilizando o metodo indexOf(NomeDoItem);
// // let indice = frutas.indexOf
//console.log(´o indice encontrado foi : ${indice}`);
//console.log(`o item buscado foi : ${Frutas[indice]}`);

// //realizando uma remocao de item utilizando o metodo splice();
// //o metodo splice() recebe dois parametros, indice do item do que sera removido e a quantidade de vezes que este mesmo indice sera removido. Ex: splice(indice, 1);
// //Dica: utilize o metodod index() para buscar o indice do item no array.

// let indice = frutas.indexOf("melancia");
//console.log(`o item rencontrado no indice antes da remocao foi : ${ frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`o item rencontrado no indice depois da remocao foi : ${ frutas[indice]}`);

//concatenacao de arrays;
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("array 1 : " + nr1);
// console.log("array 2 : " + nr2);

// //concatenando os dois arrays em um novo array.
// let nr3 = [nr1,nr2];
// console.log("array 3 : " + nr3);

// nr3.forEach( (nr)=>{
//     nr.forEach((n)){
//         console.log("itens do Array 3: " + n);
//     });
// } );

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log("array 1 : " + nr1);
console.log("array 2 : " + nr2);

//concatenando os dois arrays em um novo array com o operador SPREAD( ... )
let nr3 = [...nr1,...nr2];
console.log("array 3 : " + nr3);

nr3.forEach( (nr)=>{
    console.log(`item do Array 3 : ${nr}`)
 });
 //secreto