//variáveis da calculadora

const arrayDeOp = ["soma", "subtração", "subtracao", "subtracão", "divisão", "divisao", "multiplicação", "multiplicacao", "multiplicacão"];
let numero1 = 0;
let numero2 = 0;
let op = "";

//funções da operadora

function somar (numero1, numero2) { 
    return Number(numero1) + Number(numero2)

};

function subtrair (numero1, numero2) {
    return Number(numero1) - Number(numero2)

};

function dividir (numero1, numero2) {
    return Number(numero1) / Number(numero2)
};

function multiplicar () {
    return Number(numero1) * Number(numero2)

};

function natOp(arr, op) {  
   return arr.includes(op);

};

    do { 
        op = prompt("Qual operação você deseja realizar? Responda 'SOMA', 'SUBTRAÇÃO', 'MULTIPLICAÇÃO', 'DIVISÃO' ou 'SAIR'.");	

            while (natOp(arrayDeOp, op) === false && op != "sair") {
                alert(`Operação não reconhecida, tente novamente!`);
                op = prompt("Qual operação você deseja realizar? Responda 'SOMA', 'SUBTRAÇÃO', 'MULTIPLICAÇÃO', 'DIVISÃO' ou 'SAIR'.");	
            
            };

            if (op === "sair") {
                break;	
            }

        numero1 = prompt("Insira o primeiro valor:");
        numero2 = prompt("Insira o segundo valor:");

            switch (op) {
                case "soma":
                alert(`O resultado da soma é ${somar(numero1, numero2)}`);
                break;
                case "subtração":
                    alert(`O resultado da subtração é ${subtrair(numero1, numero2)}`);
                    break;
                case "subtracao":
                    alert(`O resultado da subtração é ${subtrair(numero1, numero2)}`);
                    break;
                case "subtracão":
                    alert(`O resultado da subtração é ${subtrair(numero1, numero2)}`);
                    break;
                case "multiplicação":
                    alert(`O resultado da multiplicação é ${multiplicar(numero1, numero2)}`);
                    break;
                case "multiplicacão":
                    alert(`O resultado da multiplicação é ${multiplicar(numero1, numero2)}`);
                    break;
                case "multiplicaçao":
                    alert(`O resultado da multiplicação é ${multiplicar(numero1, numero2)}`);
                    break;
                case "divisão":
                    alert(`O resultado da divisão é ${dividir(numero1, numero2)}`);
                    break;
                case "divisao":
                    alert(`O resultado da divisão é ${dividir(numero1, numero2)}`);
                    break;
                           

            };

    } while (natOp(arrayDeOp, op) === true) {

    alert(`Até a próxima!`);

    };