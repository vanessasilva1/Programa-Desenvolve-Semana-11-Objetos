const pessoa = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${pessoa.nome}`)
    }
}
   
pessoa.imprimeNome() //Ana

//Veja que o método imprimeNome() faz referência ao próprio objeto pessoa. O JavaScript tem uma forma melhor de fazer isso, que não “acopla” o método ao nome do objeto:

const pessoas = {
    nome: "Ana",
    email: "a@email.com",
    imprimeNome: function(){
      console.log(`${this.nome}`)
    }
   }
   
pessoas.imprimeNome() //Ana

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email ${this.email}`)
}

imprimeNomeEmail();

//Acima temos uma função que não está ligada a nenhum objeto. Vamos ver como podemos utilizá-la para objetos diferentes de forma independente:

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: imprimeNomeEmail
}
   
pessoa1.imprimeInfo()
   //nome: Ana, email a@email.com
pessoa2.imprimeInfo()
   //nome: Paula, email p@email.com

//O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.

function Pessoa(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function() {
        console.log(`nome: ${this.nome}, email: ${this.email}`);
    }
}

const pessoa31 = new Pessoa("Ana", "a@email.com")
const pessoa22 = new Pessoa("Paula", "p@email.com")

pessoa31.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa22.imprimeNomeEmail()
// nome: Paula, email: p@email.com