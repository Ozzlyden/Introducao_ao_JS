console.log("Trablhando com lopps");

const listaDeDestinos = new Array (`Salvador`, `Sao paulo`, `Rio de janeiro`); 
const idadeComprador = 18;
const estaAcopanhado = false;
let temPassagemComprada = false;
const destino = "Rio de janeiro";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcopanhado == true;
let contador = 0;
let destinoExiste = false;

    while(contador< 3 ){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador ++;
}
console.log("Destino existe");
