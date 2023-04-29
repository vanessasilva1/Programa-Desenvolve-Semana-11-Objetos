function Clientes(nome, cpf, email, saldo) { // função construtora
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        saldo += valor; //somar
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
    Clientes.call(this, nome, cpf, email, saldo) //relacionar cliente e cliente poupança. Chamando. Cliente poupança vai herdar todos as propriedades para cliente poupança. Herdando. (propriedades que quero chamar). This - se refere a este objeto que estou criando
    this.saldoPoupanca = saldoPoupanca;
} 

const ju = new ClientePoupanca('Ju', '42323424323', 'ju@gmail.com', 110, 300);

console.log(ju);

ClientePoupanca.prototype.depositarPoupanca = function(valor) { //adicionando  função depositarPoupança.
    this.saldoPoupanca += valor
} //definindo no prototipo uma nova poupança nesse cliente poupança. Criando nova propriedade.

ju.depositarPoupanca(80);
console.log(ju.saldoPoupanca);