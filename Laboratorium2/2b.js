// prezentacja dzialania if

let students = ["Ala", "Maciek", "Karolina", "Weronika", "Franek", "Julia", "Jacek"]
let girls = [];
let boys = [];

for(let i = 0; i < students.length; i++){
    let student = students[i]
    if(student[student.length-1] === "a"){  //zakladajac ze tylko imiona zenskie koncza sie na 'a'
        girls.push(student)
    }else {
        boys.push(student)
    }
}
console.log("W klasie sa",girls.length,"dziewczyny, oraz",boys.length,"chlopcow")



