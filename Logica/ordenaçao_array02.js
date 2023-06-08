let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020},
]

/*Explicando o código:
    Vai testar se o a.year é maior do que o b.year, se for verdade/true vai retornar com 1,indicando para avançar um bloco e ficar a frente do número menor, fazendo assim ficar ORDENADO em ordem crescente.
    -1 vai voltar um bloco, e 0 não vai mudar nada.
*/
// Teste lógico:
cars.sort((a, b) => {
    if (a.year > b.year){
        return 1
    } else if (a.year < b.year){
        return -1
    } else {
        return 0
    }
})

// Simplicando - 01

// cars.sort((a, b) => {
//     return a.year - b.year
// })

// Simplicando - 02

cars.sort((a, b) => b.year - a.year) // Reverse só trocando a por b de lugar

console.log(cars)