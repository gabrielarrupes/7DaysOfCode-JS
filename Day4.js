
const meuNum = 9;
let numeroChute = "";
let acertou = false;


for (let i = 0; i < 3; i++) {

    numeroChute = prompt("Digite um número de 0 à 10:");  

          
    if (numeroChute == meuNum) {

        alert ("Parabéns, você acertou!");
        acertou = true;        
        break;
        
    } 

     alert ("Errou!");

}   
        

if(!acertou) {

    alert ("Você não acertou nas três tentativas. Tente novamente!");

}