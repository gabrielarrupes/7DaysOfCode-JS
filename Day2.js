
const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual sua idade?");

// transformar a primeira letra do nome em maíuscula.
const nomeFinal = nome[0].toUpperCase() + nome.substring(1);

const linguagemDeProgramacao = prompt(`${nomeFinal}, qual linguagem de programação você está estudando?`);

const linguagemFinal = linguagemDeProgramacao[0].toUpperCase() + linguagemDeProgramacao.substring(1);

const alerta = `Olá ${nomeFinal}, você está aprendendo ${linguagemFinal} aos ${idade} anos de idade. Não desista!`;

alert(alerta);

const resposta = prompt(`${nomeFinal}, você está gostando de estudar ${linguagemFinal}? Digite SIM ou NÃO.`);

const respostaFinal = resposta.toLowerCase();

    if (respostaFinal === 'sim') {

        alert(`Muito bom! Continue estudando e você terá muito sucesso.`);

    } else if (respostaFinal === 'não' || respostaFinal === 'nao') {

        alert (`Ahh que pena... Que tal aprender outra linguagem, quem sabe aí você encontre sua verdadeira vocação :)`);
     
    } else {

        alert (`resposta inválida!`);
    }