//Por exemplo, podemos converter um objeto de livro para o JSON:

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
console.log(jsonLivro)
//Para fazer o processo inverso:

const objLivro = JSON.parse(jsonLivro)

console.log(objLivro)