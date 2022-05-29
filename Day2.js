
const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual sua idade?");

// transformar a primeira letra do nome em maíuscula.
const nomeFinal = nome[0].toUpperCase() + nome.substring(1);

const linguagemDeProgramacao = prompt(`${nomeFinal}, qual linguagem de programação você está estudando?`);

const linguagemFinal = linguagemDeProgramacao[0].toUpperCase() + linguagemDeProgramacao.substring(1);

const alerta = `Olá ${nomeFinal}, você está aprendendo ${linguagemFinal} aos ${idade} anos de idade. Não desista!`;

alert(alerta);



