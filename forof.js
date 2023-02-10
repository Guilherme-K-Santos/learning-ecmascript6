for (let letra of 'Albedo') {
    console.log(letra)
}

const ecma = ['Map', 'Set', 'Promise']

for (let chave in ecma) {
    console.log(chave)
}

for (let valor of ecma) {
    console.log(valor)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntoMap) {
    console.log(assunto)
}
for (let assunto of assuntoMap.keys()) {
    console.log(assunto)
}
for (let assunto of assuntoMap.values()) {
    console.log(assunto)
}
for (let [ch, vl] of assuntoMap) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b','c'])

for (let letra of s) {
    console.log(letra)
}