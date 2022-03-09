//Funkcja zwracajaca litery z zwracanego ciagu w kolejnosci alfabetycznej
function alpha_sort(sequence){
    let word = sequence.toLowerCase();
    let word_arr = [];
    for(let i =0; i < word.length; i++){
        word_arr.push(word[i]);
    }
    let result = "";
    word_arr = word_arr.sort();
    for(let i = 0; i<word_arr.length;i++){
        result +=word_arr[i];
    }
    return result;

}
console.log(alpha_sort("webmAster"));