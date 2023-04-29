const clientes = {
    nome: "Orlando",
    idade: 34, 
    cpf: "222444444",
    cidade: "Goiânia"
}

console.log(clientes);
console.log(clientes.nome); // nome do objeto + atributo. Notação de ponto
console.log(`Minha idade é ${clientes.idade} e meu nome é ${clientes.nome}`);

console.log(clientes.cpf.substring(0, 3)); // para exibir para segurança só os primeiros 3 números