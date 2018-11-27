const carrinho = [ {nome: "borracha", preco: 3.45 , status: true}, 
                   {nome: "lapis", preco: 3.40,status: true},
                   {nome: "caneta", preco: 3.50, status: false} 
                 ]

const st = s => s.status == true
const pre = p => p.preco < 3.50

console.log(carrinho.filter(e => e.status == true ).filter( e => e.preco == 3.45))
console.log(carrinho.filter(st).filter(pre))
