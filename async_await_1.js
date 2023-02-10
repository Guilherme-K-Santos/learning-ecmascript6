function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(esperarPor)
//     .then(() => console.log('Execuntando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Execuntando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Execuntando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// método com async await
async function executar() {
    let valor =  await retornarValor()
    await esperarPor(2000)
    console.log(`async/await ${valor}`)

    await esperarPor(2000)
    console.log(`async/await ${valor + 1}`)

    await esperarPor(2000)
    console.log(`async/await ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
