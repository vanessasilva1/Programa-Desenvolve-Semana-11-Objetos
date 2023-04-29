const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com"
}

console.log(colecionador.nome);
console.log(colecionador["nome"]);

/*Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. No segundo exemplo, acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. No JavaScript, objetos são classificados também como um array associativo (map ou dicionário).

Vamos adicionar dinamicamente uma série de tipos de quadrinhos à lista de tipos do objeto colecionador. Adicione ao objeto a função abaixo:*/

