let Personagem = { // Objeto --> Array --> Objeto 
    nome: 'João',
    idade: 22,
    carros: [
        {modelo: 'Fiat', cor: 'Preto'},
        {modelo: 'Ferrari', cor: 'Vermelho'}
    ]
}
// Cor Alterada da Ferrari
Personagem.carros[1].cor = 'Branco'

console.log(Personagem.carros[1].cor)