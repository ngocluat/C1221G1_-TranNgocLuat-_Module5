var n1 = 0;
var n2 = 1;
function fibo(num) {
    var fibonacciArray = [];
    var currentFibonacci;
    var i = 0;
    if (i < num) {
        currentFibonacci = n1 + n2;
        n1 = n2;
        n2 = currentFibonacci;
        fibonacciArray.push(currentFibonacci);
        fibo(num - 1);
        i++;
    }
    else {
        return fibonacciArray;
    }
}
var arrary = [];
function sumFibonacci() {
    var sum = 0;
    console.log("Fibonacci Array: " + fibo(10));
    for (var _i = 0, _a = fibo(10); _i < _a.length; _i++) {
        var number = _a[_i];
        sum += number;
    }
    console.log("Sum all of fibonacci : " + sum);
}
sumFibonacci();
