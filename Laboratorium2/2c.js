//stworzenie tablicy z kilkoma elementami

let given_number = 45;
let dividers_arr = [];

let i = 1;
while(i < given_number + 1){
    if(given_number % i === 0){
        dividers_arr.push(i)
    }
    i+=1;
}
console.log("Dzielniki",given_number,":","\n", dividers_arr)