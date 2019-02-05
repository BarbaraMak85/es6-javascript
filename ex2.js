const multiply = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        throw 'not a number'
    }
    return a * b;
}




console.log(multiply(2, 2));