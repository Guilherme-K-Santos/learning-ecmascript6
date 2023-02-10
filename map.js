const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // forma errada de acessar
console.log(tecnologias.get('react').framework) // forma errada de acessar

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) // retorna true e falsa caso consiga deletar
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)