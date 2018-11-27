const pessoa = {
     nome: 'marcos',
     idade: 20

}

console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
    
});

Object.defineProperty(pessoa, 'dtNasciemnto' , {
      enumerable: true,
      writable: false,
      value: '03/09/1999'
})

pessoa.dtNasciemnto = 'eerererre'
console.log(pessoa.dtNasciemnto)