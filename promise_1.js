// let a = 1
// console.log(a)

// let p = new Promise(function(cumprirPromessa) {
//     cumprirPromessa({
//         x: 3,
//         y: 4
//     })
    
// })

// p.then(function(valor) {
//     console.log(valor)
//     console.log(valor.x)
//     console.log(valor.y)
// })

// forma mais compacta (arrow funtion):

let a = 1
console.log(a)

let p = new Promise((cumprirPromessa) => {
    cumprirPromessa({
        x: 3,
        y: 4
    })
    
})

function somar(valor) {
    valor.x += 10
    valor.y += 5
}

const diminuir = (valor) => {
    valor.x -= 10
    valor.y -= 5
}

p
    .then((valor) => {
        somar(valor) // outra função chamada para processar
        console.log(valor)
        return valor
    })
    .then((valor) => {
        valor.x *= 2 // processamento sem função
        valor.y **= 2
        console.log(valor)
        return valor
    })
    .then((valor) => {
        diminuir(valor)
        console.log(valor)
    })
