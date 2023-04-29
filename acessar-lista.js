const clientes = {
    nome: "Orlando",
    idade: 34, 
    cpf: "222444444",
    cidade: "Goiânia"
}

//lista de chaves que vai receber do sistema

const chaves = ["nome", "idade", "cpf", "cidade"];

console.log(clientes[chaves[0]]); //notação de colchetes para acessar as chaves vindas de outro lugar, ao invés da notação de ponto
// não conseguimos acessar váriaveis com notação de ponto. Ex: clientes.chaves
// a notação de colchete é interessante para acessar uma chave utilizando uma variável.

chaves.forEach(info=>console.log(clientes[info])) //método de array de js. ForEach precisa de função callback.
//info - parâmetro - chave
// info  nome, idade, cpf... 0 1 2

console.log(clientes["cpf"]);