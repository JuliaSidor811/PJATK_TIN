//Funkcja sprawdzajaca, czy zadana liczba, jest liczba pierwsza
//liczba pierwsza == wieksza od 1, tylko dwa dzielniki - siebie sama + 1

function isPrime(given_number){
    let result = true;
    if(given_number <= 1){
        result = false;
        return result;
    }else if (given_number === 2){
        return  result;
    }else{
        for(let i = 2; i<given_number;i++){
            if(given_number % i === 0){
                result = false;
                break;
            }
        }
        return result;
    }

}
console.log(isPrime(2)); //prime
console.log(isPrime(4)); // not prime
console.log(isPrime(11)); //prime
console.log(isPrime(0)); //not prime
console.log(isPrime(23)) //prime