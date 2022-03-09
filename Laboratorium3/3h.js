//Funkcja przyjmująca tablicę liczb i znajdująca drugą najmniejszą i drugą największą wartość

function getNumbers(num_arr){
    let sorted_numbers = num_arr.sort((a,b) => {
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;

    });
    return [sorted_numbers[1], sorted_numbers[sorted_numbers.length-2]];
}
console.log(getNumbers([1,2,3,4,5]));
console.log(getNumbers([423,21,73,1,5]));