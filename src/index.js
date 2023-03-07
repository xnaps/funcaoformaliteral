//forma literal
const produto = {
  nome: "celular",
  preco: 5000,
  desconto: 0.0
};

produto.precoFinal = produto.preco * produto.desconto;

console.log(produto);
//forma dinamica
let pessoa = {};
pessoa.nome = "Lucas";
pessoa.idade = 22;
pessoa.altura = 1.98;

console.log(pessoa);
