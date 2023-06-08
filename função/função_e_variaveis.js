// variavel com escolpo global, me permite usar ela em qualquer função
let count = 0 

function add(){
    let count = 0 // variavel de escolpo local, se tiver o mesmo nome ela que será usada
    count++
}

add()
add()

console.log(count)