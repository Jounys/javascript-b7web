let ingredientes = ['farinha de trigo', 'ovo', 'manteiga', 'fermento', 'açucar']

// add um novo item em um array
//ingredientes.push('leite condensado') 

// Altera um item do array ou add
ingredientes[4] = 'leite condensado'

// Remove o primeiro item do array
//ingredientes.shift()

// Remove o último item do array
//ingredientes.pop()

// Junta tudo me permitindo colocar espaços ou vírgula e afins
ingredientes.join(' ')

// Ordena Alfabeticamente
//ingredientes.sort()

// Ordena de tras pra frente
//fruits.reverse() 


console.log(ingredientes.join(', '))
console.log(`Total de ingredientes: ${ingredientes.length}`)


