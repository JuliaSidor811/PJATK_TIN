/* Funkcja liczaca silnie zadanej liczby - dwie implementacje, jedna rekurencyjna, druga przy uzyciu iteracji.
 Zaimplementuj funkcje rekurencyjna przy pomocy wyrazenia (function expression),
 iteracyjna przy pomocy deklaracji (function declaration).
 */

//iteracyjnie przy uzyciu function declaration
function getFractionalIt(given_number){
    let result = 1;
    if(given_number === 0 || given_number === 1){
        return result;
    }else{
        for(let i=given_number; i>=1; i--){
            result *= i;
        }
        return result;
    }
}
let number = 10;
let number_2 = 14;
console.log("Fractional of",number, "equals", getFractionalIt(number));
console.log("Fractional of",number_2, "equals", getFractionalIt(number_2));

//Rekurencyjna przy uzyciu function expression

let getFractionalR = function (given_number){
    if(given_number === 0 || given_number === 1){
        return 1;
    }else {
        return getFractionalR(given_number-1) * given_number;
    }
};
let number_3 = 4;
let number_4 = 11;
console.log("Fractional of",number_3, "equals", getFractionalIt(number_3));
console.log("Fractional of",number_4, "equals", getFractionalIt(number_4));