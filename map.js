const nuns = [1,2,3,4,5]

let resultado = nuns.map(function(e){
  return e * 2 ; 
})

let resultado2 = nuns.map(e => e * 2)

console.log(resultado2)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado3 = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado3)


const carrinho = [ '{"nome": "borracha", "preco": 3.45}', 
                   '{"nome": "lapis", "preco": 3.40}',
                   '{"nome": "caneta", "preco": 3.50}' 
                 ]

const jes = json => JSON.parse(json)

const jese = produto => produto.preco

                 let carrinho1 = carrinho.map(e => JSON.parse(e)).map(e => e.preco)
                 let carrinho1 = carrinho.map(jes).map(jese)

console.log(carrinho1)
//console.log(json)
