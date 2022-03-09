//funkcja przyjmujaca tablice jako parametr i wypisujaca jej zawartosc w kolejnych linijkach

function myFunc(grades_tab){
    let sum = grades_tab.reduce((a,b) => a+b, 0);
    return sum / grades_tab.length;
}
grades = [3,4,2,3,5,5,3,4,2,3,3,5]
console.log("Srednia z ocen:","\n",grades,"\n","wynosi:",myFunc(grades))
