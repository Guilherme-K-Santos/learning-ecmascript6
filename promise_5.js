function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um Erro')
            // gerando error
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Teste', 0.5)
    .then(console.log)
    .catch(erro => console.log(`Erro: ${erro}`)) // o reject vem para ca
    .then(() => console.log('FIM'))
    