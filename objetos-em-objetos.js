const clientes = {
    nome: "Orlando",
    idade: 34, 
    cpf: "222444444",
    cidade: "Goiânia",
    fones:["42432423423", "42342300999"]
}

clientes.dependentes = { //objeto pro cliente
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(clientes); //objetos em objetos
 
// alteração dentro da propriedade dependentes
//alterar nome
clientes.dependentes.nome = "Sara Silva";

console.log(clientes);