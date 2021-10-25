var student = {
    name: 'Robert Bacc',
    sclass: 'VI',
    rollno: 12

}
console.log(student)
delete student.rollno;
console.log(student)

student.age= 17
console.log(student.age)



document.getElementById('fill').innerHTML = student.name+" is "+student.age;
