const avo = {
    at1: 'A'
}

const pai = {
    __proto__: avo,
    at2: 'B'
}
const filho = {
    __proto__: pai,
    at3: 'C'
}

console.log(filho.at2)







const pai2 = { nome: 'pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai2)
filha1.nome = 'ana'


const filha2 = Object.create(pai2 ,{
nome: {value: 'bia', writable: false, enumerable: true }
    
})

console.log(`${filha2.corCabelo} : ${filha2.nome}`)

for(let i in filha2) {
    filha1.hasOwnProperty(i) ? console.log(i) : console.log('por heranca ' + i)


}








function meuObjeto(){}

const obj1 = new meuObjeto
const obj2 = new meuObjeto



