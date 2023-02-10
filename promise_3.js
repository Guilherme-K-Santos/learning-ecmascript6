function gerarNumEntre(min, max) {
    if(min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min) + 1) + min
        resolve(aleatorio)
    })
}

gerarNumEntre(1, 60)
    .then(num_aleatorio => num_aleatorio * 10)
    .then(num_x_10 => num_x_10 + 5)
    .then(num_final => `O número foi ${num_final}`)
    .then(console.log)