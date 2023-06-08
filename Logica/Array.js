let fruits = ['Maçã', 'Uva', 'Laraja', 'Banana']

// Alterando o último item do array sem precisar saber qual era a posição exata
fruits[fruits.length - 1] = 'Pêra'

// Alternativa de fazer a mudança
// fruits.pop()
// fruits.push('Pêra')

console.log(fruits)