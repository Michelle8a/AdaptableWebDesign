function operacion (a, b, fn){
    return fn(a, b);
}

console.log(operacion(4, 2, (x, y) => x / y));