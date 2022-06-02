const area = prompt ("Você deseja seguir para área de Front-End ou seguir para a área de Back-End?"); 

// para passar todas as grafias possíveis da variável área.
const areaNome = area.toLowerCase();
const escolhaFront = ["front-end", "front end", "frontend"];
const escolhaBack = ["back-end", "back end", "backend"];
const a = escolhaFront.includes(areaNome);
const b = escolhaBack.includes(areaNome);
//

    if (a === true) {

        linguagem = prompt("Você quer aprender React ou Vue?");

    } else if (b === true) {

        linguagem = prompt("Você quer aprender C# ou Java?");

    } else { 

        alert ('Você não escolheu uma linguagem de programação válida!');
    }
