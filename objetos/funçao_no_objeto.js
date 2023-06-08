let Personagem = {
    nome: 'João',
    sobrenome: 'paulo',
    idade: 22,
    NomeCompleto: function() {
        return ` Full Name: ${this.nome} ${this.sobrenome}` //Obs: 'this' só funciona em function. Não funciona em Arrow
    }

}

console.log(Personagem.NomeCompleto())