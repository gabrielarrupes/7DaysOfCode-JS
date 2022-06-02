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

// transformar a primeira letra em maíuscula.   
const areaFinal = areaNome[0].toUpperCase() + areaNome.substring(1);
const linguagemFinal = linguagem[0].toUpperCase() + linguagem.substring(1);
//

const escolhaEsp = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");

    if (escolhaEsp === 1) {

        alert (`Continue se especializando em ${linguagemFinal} para dominar a área de ${areaFinal}!`); 

    } else if (escolhaEsp === 2) {
        
        alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagemFinal} se você quer se tornar Fullstack!`); 

    } else { 

        alert ("Resposta inválida!")
    
    }