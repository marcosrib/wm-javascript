let tse = [1,2,3,4]
tse.pop() // remove ultimo elemento da lista
tse.push('marcos') // adicion elemento
tse.shift() // remove primeiro elemento 
tse.unshift('jose') // adiciona o elemento na primeira possição
tse.splice(0,1) // adicina e remove elementos
console.log(tse)

const teste = tse.slice(1) // retorna novo array
console.log(teste)

const teste2 = tse.slice(0,2)
console.log(teste2)

const arrays = { 0: 'marcos' , 1: 'jose' ,2: 'joao' }
Object.defineProperty(arrays,'toString',{
    value: function(){return Object.values(this)},
    enumeralbe: false

})

let arraysq = [1,2,3,4]
console.log(arrays1.toString(), arraysq)