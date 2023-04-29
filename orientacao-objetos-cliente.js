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

const andre = new Cliente('André', 'andre@gmail.com', '23423423423', 900);

andre.depositar(90);

andre.exibirSaldo();

console.log(andre); 

//Você deve ter reparado na palavra-chave this que foi utilizada anteriormente, tanto nas funções construtoras quanto nas classes, e que significa literalmente “isso” ou “este”