// Objeto
let Personagem = {
    nome: 'João',
    idade: 22,
    pais: 'Brasil',
    olhos: ['Preto'], // Array
    habilidades: {
        forca: 500,
        verlocidade: 200,
        inteligencia: 750,
    }
}
// Alterando os dados do objeto
Personagem.nome = 'Jounys'
Personagem.habilidades.verlocidade += 200

// Adicionando no Array dentro do objeto
Personagem.olhos.push('Verde')

console.log(Personagem.olhos[1])
// console.log(`Nome: ${Personagem.nome}
// Idade: ${Personagem.idade}
// Habilidades: 
// Força: ${Personagem.habilidades.forca}
// Velocidade: ${Personagem.habilidades.verlocidade}
// Inteligência: ${Personagem.habilidades.inteligencia}`)