
// setTimeout(function() {
//     console.log('Executando callback1')

//     setTimeout(function() {
//         console.log('Executando callback2')

//         setTimeout(function() {
//             console.log('Executando callback3')
//         }, 2000)
//     }, 2000)
// }, 2000)

// código antigo e de dificil compreensão

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(() => esperarPor())

// método usando promises