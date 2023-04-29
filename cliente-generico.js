function Clientes(nome, cpf, email, saldo) { // função construtora
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        saldo += valor; //somar
    }
}

const andre = new Clientes("André", "123121431431", "andre@gmail.com", 100);
//new - criando um new, novo cliente. Const andre é uma nova instância de cliente, criada a partir da função.
console.log(andre); // andre é um objeto que foi construido a partir de cliente