const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
};

/*Vamos agora tentar juntar esses dois objetos em apenas um, que vamos chamar de guerreiro. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:*/

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro);

//Aqui entramos com o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula:

const guerreiros = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiros)

//Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...ranger }
console.log(personagens)