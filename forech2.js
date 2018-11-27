




Array.prototype.forEachw = function(callback) {

    for(let i in aprovados){
        //console.log(aprovados[i])
        callback(this[i])
    }
  
}


const aprovados = ['marcos','aldo','daniel','raquel']


aprovados.forEachw(nome => console.log(nome))
