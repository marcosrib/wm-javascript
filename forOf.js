for (let letra of "teste") {
    console.log(letra)
}

const assuntos = ['map', 'set']

for (let letra in assuntos) {
    console.log(letra)
}

for (let letra of assuntos) {
    console.log(letra)
}

const assuntosa = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['promisse', { abordado: false }]

])


for (let l of assuntosa) {
    console.log(l)
}

for (let l of assuntosa.keys()) {
    console.log(l)
}
for (let l of assuntosa.values()) {
    console.log(l)
}


for (let [ch, vl] of assuntosa.entries()) {
    console.log(ch, vl)
}

