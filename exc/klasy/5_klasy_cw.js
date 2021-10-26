var student = {
    firstname: 'Paweł',
    lastname:'Kowalski',
    ID: 543231,
    sclass: 'VI',
    age: 22

}

let y, txt=''
for (y in student) 
    txt += student[y] + "<br>"



//document.getElementById("fill").innerHTML = `student ${student.firstname} ${student.lastname} ma ${student.age} lata`;
document.getElementById("fill").innerHTML = txt