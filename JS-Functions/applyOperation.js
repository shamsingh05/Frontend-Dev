function applyOperation(numbers, operation) {
    let result = [];
    for (let num of numbers) {
        result.push(operation(num)); 
    }
    return result;
}

function double(n) {
    return n * 2;
}

function square(n) {
    return n * n;
}

console.log(applyOperation([1, 2, 3, 4], double)); 
console.log(applyOperation([1, 2, 3, 4], square));
