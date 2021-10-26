function Person(firstname, lastname, age, study){
    this.firstname = firstname
    this.lastname = lastname
    this.age =  age
    this.study = study
    this.summary = function() {
        return `${this.firstname} ${this.lastname} ma ${this.age} lata i studiuje ${this.study}`
    }
}

const Uczen1 = new Person('Adam','Głowacki',33,'Informatyka')
document.getElementById('fill1').innerHTML = Uczen1.summary();