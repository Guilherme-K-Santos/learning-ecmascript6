// conuntos: não aceita elementos repetidos e não é indexado.

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Grêmio'))

times.delete('Flamengo')

console.log(times.has('Flamengo'))
console.log(times)

const nomes = ['Lucas', 'Julia', 'Albedo', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // O segundo Lucas será ignorado