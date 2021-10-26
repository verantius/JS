var student = {
    firstname: 'Paweł',
    lastname:'Kowalski',
    ID: 543231,
    sclass: 'VI',
    age: 22
}
student.narodowosc = "Polska"

student.person = function() {
    //return `student ${this.firstname.toUpperCase()} ma numer albumu ${this.ID}`;

}

let y, txt=''
let count=0
for (y in student) 
    txt += student[y] + "<br>"
for (y in student)
    if(student.hasOwnProperty(y)==true) count++ 

document.getElementById("fill1").innerHTML = `student ${student.firstname} ${student.lastname} ma ${student.age} lata`;
document.getElementById("fill2").innerHTML = `ten obiekt ma ${count} elementów`
document.getElementById("fill3").innerHTML = student.person()
document.getElementById("fill4").innerHTML = Object.values(student)
