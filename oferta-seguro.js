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
//  verificar se a chave existe
//const propsCliente = Object.keys(clientes); // traz um array com todas as chaves do nosso objeto.
//console.log(propsCliente);

function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj); // traz um array com todas as chaves do nosso objeto.
    if(propsCliente.includes("dependentes")) { //include vai verificar se existe essa chave ou não. TRUE OU FALSE
       console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } 
}

oferecerSeguro(clientes);