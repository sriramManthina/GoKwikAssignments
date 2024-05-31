// Write a function that sums squares of numbers in list that may contain more lists

// function returns the sum of square of all numbers present within nested arrays
const SumSquares = (arr) => {
    // initializing the result to be returned
    let totalSum = 0

    arr.forEach(val => {
        // if val is an array recursively return its sum of squares and add it to totalSum
        if (Array.isArray(val)) totalSum += SumSquares(val)
        // if val is a number just add its square to the totalSum
        else totalSum += val * val
    })
    
    return totalSum
}

var l = [1,2,3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[1,2],3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14
l = [[[[[[[[[1]]]]]]]]]
console.log(SumSquares(l)); // 1 = 1
l = [10,[[10],10],[10]]
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400