// Trabalhando lops com Arrays e objeto/Listas

let cores = [
    {nome: 'Azul', qt: 10},
    {nome: 'Preto', qt: 5},
    {nome: 'Vermelho', qt: 15},
]

// for(let cor of cores){
//     console.log(`Nome: ${cor.nome} - Quantidade: ${cor.qt}`)
// }

// Ex:

// for (let n9 in cores){
//     console.log(cores[n9].nome + ' Quantidade: ' + cores[n9].qt)
// }

for (let n9 in cores){
    cores[n9].nome = cores[n9].nome.toUpperCase() // Modificando dentro do lop
}
console.log(cores)