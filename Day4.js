
const numAlt = Math.floor(Math.random() * 10 + 1);
let numeroChute = "";
let acertou = false;


for (let i = 0; i < 3; i++) {

    numeroChute = prompt("Digite um número de 0 à 10:");  

    //condição para não aceitar números menores que zero e maiores que dez.

    while (numeroChute < 0 || numeroChute > 10) {

        numeroChute = prompt("Número inválido! Digite um número de 0 à 10:")
    
    }
    //
          
    if (numeroChute == numAlt) {

        alert ("Parabéns, você acertou!");
        acertou = true;        
        break;
        
    } 

     alert ("Errou!");

}   
        

if(!acertou) {

    alert (`Você não acertou nas três tentativas. O número correto era ${numAlt}!`);

}