//construktor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//wywołanie