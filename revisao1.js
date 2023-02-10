// template string
let numero = 1235532

console.log(`printando: ${numero}`)

// destructuring

const [l, e, ...tras] = 'array_random'
console.log(l, e, tras)
// cada elemento do array se refere a uma letra

const [x, y] = [1, 2]
console.log(x, y)
// dá valor a várias váriaveis de uma vez

const [a, , c] = [1, 2, 3]
console.log(a, c)
/* mesma coisa, mas mostrando a possibilidade
de se pular algum(ns) caracteres */

const { idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome)
// destructuring com objetos acima