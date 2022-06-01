const area = prompt ("Você deseja seguir para área de Front-End ou seguir para a área de Back-End?"); 

// para passar todas as grafias possíveis da variável área.
const areaNome = area.toLowerCase();
const escolhaFront = ["front-end", "front end", "frontend"];
const escolhaBack = ["back-end", "back end", "backend"];
const a = escolhaFront.includes(areaNome);
const b = escolhaBack.includes(areaNome);
//