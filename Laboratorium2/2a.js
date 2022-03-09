// Prezentacja dzialania petli for i petli while

let suma = 0;
for(let i =0; i<11;i++){
    suma += i;
}
console.log("Suma wszystkich liczb od 0 do 10 wynosi:", suma)

let result = 0;
let i = 0;

while(i < 101){
    if(i%2 === 0){
        result += 1;
    }
    i++;
}
console.log("W przedziale 0-100 znajduje sie:",result,"liczb parzystych")