const clientes = {
    nome: "Orlando",
    idade: 34, 
    cpf: "222444444",
    cidade: "Goiânia",
    fones:["42432423423", "42342300999"],
    dependentes: [{ //objeto dentro de objetos
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

//como agregar/adicionar + de 1 dependente? Listar em array

//Posso usar funções de array

//push sempre adiciona no ultimo indice do array

clientes.dependentes.push({
    nome: "Sandra Oliveira",
    parentesco: "filha",
    dataNasc: "11/03/2000"
})

console.log(clientes); //array com 2 elementos/ 2 indices

//como acessar dependentes?
//filter - filtrar  método de array que sempre vai retornar o que ele filtra dentro de um novo array.

const filhaMaisNova = clientes.dependentes.filter(dependente => dependente.dataNasc==="11/03/2000");

console.log(filhaMaisNova); // traz todos os dados dessa pessoa que nasceu na data buscada

console.log(filhaMaisNova[0].parentesco); //[0] acessar o indice 0 do array. Na verdade é o unico elemento q nos temos