let n1: number = 0;
let n2: number = 1;
let fibonacciArray: number[] = [];

function fibo(num: number): number[] {
    let currentFibonacci: number;
    let i = 0;
    if (i < num) {
        currentFibonacci = n1 + n2;
        n1 = n2;
        n2 = currentFibonacci;
        fibonacciArray.push(currentFibonacci);
        fibo(num - 1);
        i++;
    } else {
        return fibonacciArray;
    }
}

function sumFibonacci() {
    let sum = 0;
    fibo(10);
    console.log("Fibonacci Array: " + fibonacciArray);
    for (let number of fibonacciArray) {
        sum += number;
    }
    console.log("Sum all of fibonacci : " + sum);
}

sumFibonacci()


