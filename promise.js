function falarDepoisDe(segundos, frase) {
    // Parâmetro resolve é uma função chamada quando a promessa for atendida
    // Parâmetro reject é uma função chamada quando a promessa for rejeitada
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // apenas um parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Legal!')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e, 'deu erro porra'))