class Cliente { //começa com letra maiuscula
    constructor(nome, email, cpf, saldo) { //parametros para construir o obj
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) { //método
        this.saldo += valor;
    }

    exibirSaldo() { //método
        console.log(this.saldo);
    }
}

//herança
//extends -- vai herdar de Cliente
class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo) //indo no construtor da classe cliente, pegando os atributos e passando para o super essas informações para construir o cliente. Propriedades que quero herdar
        this.saldoPoupanca = saldoPoupanca; // atributo próprio dessa classe 
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const andre = new ClientePoupanca("Andre", "andre@gmail.com", "424234234232", 100, 300);
console.log(andre);


andre.depositar(30);
andre.depositarPoupanca(342);
console.log(andre);
