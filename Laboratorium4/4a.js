/*Napisz funkcję JS konwertującą temperatury między skalami Celsjusza i Fahrenheita
(https://en.wikipedia.org/wiki/Fahrenheit), plus formularz przyjmujący dane do konwersji i wypisujący wynik.
 */
function convertFromFtoC(){
    let given_number = prompt("Enter the temperature");
    if(typeof parseFloat(given_number) != "number"){
        alert("Given type of data is invalid");
        document.getElementById("con_result").innerHTML = "Error";
    }else{
        let result = Math.round((parseFloat(given_number) -32)/1.8)
        document.getElementById("con_result").innerHTML= given_number +"F"+" equals "+ result+"C";
    }
}
function convertFromCtoF(){
    let given_number = prompt("Enter the temperature");
    if(typeof parseFloat(given_number) != "number"){
        alert("Given type of data is invalid");
        document.getElementById("con_result").innerHTML = "Error";
    }else{
        let result = Math.round(parseFloat(given_number)*1.8 +32);
        document.getElementById("con_result").innerHTML = given_number +"C"+ " equals "+result+"F";
    }

}



