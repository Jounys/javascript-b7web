

function addSquare(a, b){
    const square = (x) => { // ambos são fazem a mesma coisa so ajuda na identação
        return x * x
    }

    // function square(x){ // ambos são fazem a mesma coisa so ajuda na identação
    //     return x * x
    // }

    let sqrA = square(a)
    let sqrB = square(b)
    return sqrA + sqrB
}

console.log(addSquare(2, 3))