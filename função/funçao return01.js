function MaiorDeIdade(idade){
    if(idade >= 18){
        return true; 
    } else {
        return false;
    }
}

let idade = 12;
let verificaçao = MaiorDeIdade(idade)

if (verificaçao){
    console.log('É maior de Idade')
} else {
    console.log('É menor  de idade')
}


//console.log(verificaçao)
// O resultado dessa função é um boolean
 