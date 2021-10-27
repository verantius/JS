class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
            return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised=true;
    }
    //klasa spina wszystkie obiekty, które posiadają właśćiwośći 
    //metody to wszystkie akcje wykonywane na obiektach 
    //w metodach mozna uzywac this.
    //klasy i konstruktory z duzej litery
}
//Instatiate Object
const Diuna = new Book('Diuna','Frank Herbert','1965');
const Wladca1 = new Book('Wladca Pierscieni: Drużyna Pierscienia','JRR Tolkien','1955');
const Wladca2 = new Book('Wladca Pierscieni: Dwie Wieże','JRR Tolkien','1955');

console.log(Wladca1)
Wladca1.revise('1955')
console.log(Wladca1)

//subklasy

class Books {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

class Magazine extends Books {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}
//instantiate Magazine
const mag1 = new Magazine('Fantastyka', 'fans','2015','Jan');

console.log(mag1)
console.log(mag1.getSummary())