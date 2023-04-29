const clientes = [
    {
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
        }],
    },
    {
        nome: "Anna",
        idade: 32, 
        cpf: "2222121444444",
        dependentes: [{ //objeto dentro de objetos
            nome: "Sônia",
            parentesco: "filha",
            dataNasc: "20/03/2011" },
        {
            nome: "Andressa",
            parentesco: "mãe",
            dataNasc: "11/03/1980"
        }
        ],
    }
];
// ... -
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.log(listaDependentes); //pegou todos os dependentes de cada uma das listas e juntou em um array/espalhou
// ... operador de espalhamento
// espalha o contéudo dentro de um array
//retira cada elementos de cada um dos arrays e espalha eles dentro de um único array.
console.table(listaDependentes); // exibe como no mysql. Em tabelas.