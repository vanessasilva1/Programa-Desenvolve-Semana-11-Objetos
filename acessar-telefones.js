const clientes = {
    nome: "Orlando", //chave-valor
    idade: 34, 
    cpf: "222444444",
    cidade: "Goiânia",
    telefones:["5555222333", "2332122222"] //pode ter valores de chaves dentro de um array.
}

clientes.telefones.forEach(fones => console.log(fones)); //fones é o meu parametro

//forEach não retorna, apenas faz o que se pede dentro do loop. Vai apenas exibir no console

//notação de pontos possibilita que permite acessar o valor dessa chave

