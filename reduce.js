const carrinho = [ {nome: "borracha", preco: 3.45 , status: true}, 
                   {nome: "lapis", preco: 3.40,status: true},
                   {nome: "caneta", preco: 3.50, status: false} 
                 ]

const resultado = carrinho.map(a => a.preco).reduce(
    (a,e) => { 
        
    console.log(a,e)
    return a + e
    }, 1
 )         
 
 console.log(resultado)



const resultado1 = carrinho.map(a => a.status).reduce(
  (a,e) => { 
      
  console.log(a,e)
  return a || e == true 
  }
) 



console.log(resultado1 == true ? 'sao bolsista' : 'n saõ bolsistas'  )