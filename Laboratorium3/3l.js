/*Napisz funkcje konstruktora, tworzącą obiekty reprezentujące studentów –
 mają zawierać imię, nazwisko, nr indeksu, tablicę z ocenami i metodę wypisującą imię, nazwisko i średnią ocen*/

function Student(name, last_name, index_num, grades){
    this.name = name;
    this.last_name = last_name;
    this.index_num = index_num;
    this.grades = grades;
    this.getInfo= function () {
        let sum = 0;
        for(let i =0; i <this.grades.length; i++){
            sum += this.grades[i]
        }
        return "Imie:"+this.name+"\n"+
            "Nazwisko:"+this.last_name+"\n"+
            "Srednia ocen:"+ sum/this.grades.length;
    }

}
const stuent1 = new Student("Julia","Sidor","s18592",[4,4,2,3,5,5,4]);
console.log(stuent1.getInfo());


