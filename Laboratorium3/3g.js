//Funkcja zwracajaca typ otrzymanego parametru
function getTheType(param){
    return typeof param;
}
console.log(getTheType("Parametr"))
console.log(getTheType(true))
console.log(getTheType("12.4"))
console.log(getTheType(39403202))
console.log(getTheType(32.1))
console.log(getTheType(null))
console.log(getTheType(["A","B","C"]))