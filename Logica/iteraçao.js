let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra']

// A função filter gera um novo array por isso é preciso salvar em uma variavel
let bigFruits = fruits.filter((value) => {
    return value.length > 4

    // if (item.length > 4){
    //     return true
    // } else {
    //     return false
    // }
})

console.log(bigFruits)