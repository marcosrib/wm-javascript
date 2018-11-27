const aprovados = ['marcos','aldo','daniel','raquel']

aprovados.forEach( (nome,i,array) =>{
console.log(`${i+1})  ${nome}`)
console.log(array)
})


aprovados.forEach( nome => console.log(nome))


const exibirAprovados = aprovado => console.log(aprovado)


aprovados.forEach(exibirAprovados)