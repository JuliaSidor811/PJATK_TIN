//Funkcja liczaca n-ty numer w ciagu Fibonacciego
function fibonacci(number){
    let fibonacci = [];
    fibonacci.push(1,1); // pierwsze i drugie miejsce == 1
    for (let i = 2; i < number; i++){
        let sum = fibonacci[i-2] + fibonacci[i-1];
        fibonacci.push(sum);
    }
    return fibonacci[fibonacci.length-1];
}
console.log(fibonacci(12));