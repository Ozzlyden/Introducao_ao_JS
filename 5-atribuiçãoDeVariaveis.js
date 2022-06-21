console.log("atribuição de variaveis");
const idade = 29;
let nome = "Victor";          // const n pode ser mudado, ex: nome = "joao" ja  tava armazenado Victor, mas se colocar let ela pode ser alterada
const sobrenome = "Valente";

console.log(nome, sobrenome);
console.log(`Meu nome e ${nome} ${sobrenome}` );        //${} chama a var 

nome = nome + sobrenome;
console.log(`Nome ${nome}`);
