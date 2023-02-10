const funcionario = { nome: 'Maria', salario: 12599.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)
// espalhou os atributos de funcionario pelo clone (spread)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)
