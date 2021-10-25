//construktor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
}
Book.prototype.getSummary = function() {
         return `${this.title} was written by ${this.author} in ${this.year}`;
     }

//Get summary

//wywołanie
const book1 = new Book('Diuna','Frank Herbert','1965');
const book2 = new Book('Hobbit','JJR Tolkien','1937');

console.log(book2.getSummary())

//----Inheretance----
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getSummary = function() {
            return `${this.title} was written by ${this.author} in ${this.year}`;
        }

    function Magazine(title, author, year, month) {
        Book.call(this, title, author, year);

        this.month = month;
    }
    //Inherent Prototype
    Magazine.prototype = Object.create(Book.prototype);

    //Instantiate Magazine Object
    const mag1 = new Magazine('Mag One', 'John Doe', '2018','Jan');


    console.log('---')
    console.log(mag1.getSummary());
//----Object create----
    console.log('---')
    const bookProtos = {
        getSummary: function() {
            return `${this.title} was written by ${this.author} in ${this.year}`;
        },
        getAge: function() {
            const years = new Date().getFullYear() - this.year;
            return `${this.title} is ${years} years old`;
        }
    }

    //Create Object
    const book4 = Object.create(bookProtos);
    book1.title = 'Witcher';
    book1.author = 'Sapkowski';
    book1.year = '1990';

    console.log(book4);