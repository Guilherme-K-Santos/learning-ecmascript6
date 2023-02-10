const fs = require('fs')

const caminho = __dirname + '/dados.txt'

const desafio = (caminho) => new Promise((resolve, _) => {

    fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString()))

})

desafio(caminho)
    .then(conteudo => console.log(conteudo))
