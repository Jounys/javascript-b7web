function validar(usuario, senha){
    if( usuario === 'pedro' && senha === '123'){
        return true
    } else{
        return false
    }
}

let usuario = 'pedro'
let senha = '123'
let validação = validar(usuario, senha)
if (validação){
    console.log('Acesso Liberado')
}else {
    console.log('Acesso Negado!')
}