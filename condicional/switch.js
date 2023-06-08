let profissional = 'policial'

switch (profissional) {
    case 'fiscal':
        console.log('Sua camisa será Verde')
        break
    case 'bombeiro':
        console.log('Sua camisa será Vermelha')
        break
    case 'policial':
        console.log('Sua camisa será Azul')
        break
    default: // padrão
        console.log('Sua camisa será Preta')
        break
}