function gerarNumEntre(min, max, numerosProibidos) {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido')
        } else {
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNum) {
    const numeros = []
    for (let _ of Array(qtdeNum).fill()) {
        numeros.push(await gerarNumEntre(1, 60, numeros))
    }
    return numeros
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)