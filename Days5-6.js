// refatorar, pegar a parte do dia 5 ( que está melhor trocar var por let nas arr), organizar o dia 6;
//código ta rodando.
// na let remover alterar a ordem dos \n da lista pois está torta.

let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let item = "";
let catItem = "";


let iniciaLista = prompt ("Deseja adicionar um item a sua lista de compras? Responda SIM ou NÃO.");
let lista = iniciaLista.toLowerCase();

    if (lista != "sim" && lista != "não" && lista!= "nao") {

        alert("Operação não reconhecida!");

        iniciaLista = prompt ("Deseja adicionar um item a sua lista de compras? Responda SIM ou NÃO.");
        lista = iniciaLista.toLowerCase();
    }

    while (lista == "sim")  {

        item = prompt ("Insira o item desejado:");
        catItem = prompt ("Digite o número correspondente a categoria do produto: 1 - Laticínio/Carnes; 2 - Frutas/Legumes; 3 - Pães/Grãos; 4 - Higiene/Limpeza;");

        switch (catItem) {
            case "1":
                arr1.push(item);
                break;
            case "2":
                arr2.push(item);
                break;
            case "3":
                arr3.push(item);
                break;
            case "4":
                arr4.push(item);
                break;
        }

        iniciaLista = prompt ("Deseja adicionar um item a sua lista de compras? Responda SIM, NÃO ou REMOVER.");
        lista = iniciaLista.toLowerCase();
};

    if(iniciaLista === "remover") {
	
        let	remover = prompt(`Sua lista: - Laticínio/Carnes: ${arr1}\n - Frutas/Legumes: ${arr2}\n - Pães/Grãos: ${arr3}\n - Higiene/Limpeza: ${arr4} \n. Deseja remover qual item?`);
        const removerFinal = remover.toLowerCase();
        const incluiArr1 = arr1.includes(removerFinal);
        const incluiArr2 = arr2.includes(removerFinal);
        const incluiArr3 = arr3.includes(removerFinal);
        const incluiArr4 = arr4.includes(removerFinal);
        
    
            if (incluiArr1 === true){
                    arr1.splice(arr1.indexOf(removerFinal), 1);
                    alert(`O item ${remover} foi removido com sucesso!`);

            } else if(incluiArr2 === true){
                    arr2.splice(arr3.indexOf(removerFinal), 1);
                    alert(`O item ${remover} foi removido com sucesso!`);

            } else if (incluiArr3 === true){
                    arr3.splice(arr3.indexOf(removerFinal), 1);
                    alert(`O item ${remover} foi removido com sucesso!`);

            } else if (incluiArr4 === true){
                    arr4.splice(arr4.indexOf(removerFinal), 1);
                    alert(`O item ${remover} foi removido com sucesso!`);

            } else {
                    alert(`Item não localizado!`);

            }

        iniciaLista = prompt ("Deseja adicionar um item a sua lista de compras? Responda SIM, NÃO ou REMOVER.");
        lista = iniciaLista.toLowerCase();
    }
    
    alert (`Sua lista está pronta: - Laticínio/Carnes: ${arr1}\n - Frutas/Legumes: ${arr2}\n - Pães/Grãos: ${arr3}\n - Higiene/Limpeza: ${arr4}\n`);