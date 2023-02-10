// ES8: Object.values/Object.entries

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
// printa os valores dos atributos

console.log(Object.keys(obj))
// printa as chaves

console.log(Object.entries(obj))
// printa arrays com chaves e valores dentro de outro grande array

// MElhorias da notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oiii'
    }
}
console.log(pessoa.nome, pessoa.ola())

// classes
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())