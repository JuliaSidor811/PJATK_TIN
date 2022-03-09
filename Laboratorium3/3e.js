function getTheLongestWord(sequence){
    let sentence = sequence.replaceAll(','," ");
    let sequence_arr = sentence.split(" ");
    let arr_sorted = sequence_arr.sort((a,b)=>{
        if(a.length > b.length) return -1;
        if(a.length < b.length) return 1;
        return 0;
    })
    return arr_sorted[0];
}
console.log(getTheLongestWord("Ala ma kota,a kot ma Ale"));
console.log(getTheLongestWord("Test,tescik,testunio"));
