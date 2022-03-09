//Funkcja sprawdza czy przekazany ciag jest palindromem

function isPalindrom(sequence){
    let result;
    let temp;
    if(typeof sequence === "string"){
        temp = "";
        for(let i = sequence.length-1; i>=0;i--){
            temp += sequence[i];
        }
        result = temp === sequence;
    }else{
        temp = [];
        for (let i = sequence.length-1; i>=0;i--){
            temp.push(sequence[i]);
        }
        let k = 0
        while (k < sequence.length){
            result = sequence[k] === temp[k]
            if (result === false){
                break;
            }
            k +=1;

        }
    }

    return result;
}
console.log(isPalindrom([6,5,4,4,5,6]));
console.log(isPalindrom([843,23,21]));
console.log(isPalindrom(["Ala","ma","kota",5]));
console.log(isPalindrom("kajak"));
console.log(isPalindrom("loteria a a"));