function gerarNumEntre(min, max, tempo) {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
            resolve(aleatorio)
        }, tempo)

    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumEntre(1, 1000, 1000),
        gerarNumEntre(1, 1000, 3000),
        gerarNumEntre(1, 1000, 4000),
        gerarNumEntre(1, 1000, 6000),
        gerarNumEntre(1, 1000, 8000),
        gerarNumEntre(1, 1000, 11000),
        gerarNumEntre(1, 1000, 13000),
        gerarNumEntre(1, 1000, 14000),
        gerarNumEntre(1, 1000, 16000),
        gerarNumEntre(1, 1000, 17000),

    ]) // apenas após todas as promises serem resolvidas que será retornado o array
}

gerarVariosNumeros().then(numeros => console.log(numeros))
// nesse caso foi retornado em 17 segundos.
