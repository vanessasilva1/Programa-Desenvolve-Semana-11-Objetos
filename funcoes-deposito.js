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
//utiliza funções para dar comportamentos - métodos q estão ligadas ao contexto do objeto

//pessoa também faz coisas
//compartamentos, como sacar dinheiro

console.log(clientes.saldo);
clientes.depositar(30);
console.log(clientes.saldo);

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
   
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/*A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol): 
Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
*/

const objPersonagem3 = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
   
const objPersonagem4 = Object.create(objPersonagem3)
objPersonagem4.nome = "Gandalf, o Cinzento"
   
console.log(objPersonagem3.nome) //Gandalf
console.log(objPersonagem4.nome) //Gandalf, o Cinzento

//O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.