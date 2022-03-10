/*Stwórz prototyp obiektu reprezentującego studenta przy pomocy inicjalizatora –
obiekt ma zawierać tablicę z listą przedmiotów z programu studiów,
przygotuj funkcję tworzącą nowe obiekty na podstawie prototypu, ustawiającą im własności imię, nazwisko i nr indeksu
 */

const Student = {
    subjects:["TIN","ZPR","LEK","ISZ","SSW","SAD"]
}
function createStudent(name,last_name,index_nr){
    let student = Object.create(Student);
    student['name'] = name;
    student['last_name'] = last_name;
    student['index_nr'] = index_nr;
    return student;
}

let student_example= createStudent("Julia","Sidor","s18592")
console.log(student_example.name, student_example.last_name,student_example.index_nr,student_example.subjects)