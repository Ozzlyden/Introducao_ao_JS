console.log(`trabalhando com Listas`);

const salvador = `Salvador`;
const saoPaulo = `Sao Paulo`;
const rioDeJaneiro = `Rio de janeiro`;
let idade = 10;
let n = 0;

const listaDeDestinos = new Array (`Salvador`, `Sao paulo`, `Rio de janeiro`, "Brasilia", idade, idade+10);  //pode usar `` ou ""

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba `)       //adicionou o curitiba a lista

console.log("Lista atualizado", listaDeDestinos);

listaDeDestinos.splice(2, 1);   //vai deletar Rio de janeiro pq ta na posição de 0 ate 2 e ele so quer deletar um elemento da lista apartir da posição 2
                                // 0 = Salvador, 1 = Sao Paulo, 2 = Rio de janeiro
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //vai mostrar oq ta na posicao 1 da lista (Sao paulo)

   
