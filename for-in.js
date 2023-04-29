const clientes = {
    nome: "Orlando",
    idade: 34, 
    cpf: "222444444",
    cidade: "Goiânia",
    fones:["42432423423", "42342300999"],
    dependentes: [{ //objeto dentro de objetos
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011" },
    {
        nome: "Sandra Oliveira",
        parentesco: "filha",
        dataNasc: "11/03/2000"
    }
    ],
    saldo: 100,
    depositar:function(valor) //parametro para alterar o saldo
    {
        this.saldo += valor; //this faz referência ao próprio objeto. saldo = saldo + valor
    }
}

//Como percorrer um objeto. pq objeto é diferente de array
//objeto não é ordenado

//metodo for in - metodo para objetos

let relatorio = "";
for (let info in clientes) { // oque quer q acontece a cada chave que o for percorrer dentro do objeto
    if(typeof clientes[info] === "object" || typeof clientes[info] === "function") {
        continue //nao vou exibir. Continua e não faz nada
    }
    else{
        relatorio += `
        ${info} ===> ${clientes[info]} 
        `; // template string deixa quebrar linha

    }
} /// para cada dado/info - chave é uma informação do objeto cliente

console.log(relatorio);