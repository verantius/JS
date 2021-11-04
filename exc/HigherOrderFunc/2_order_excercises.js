const books = [
    {name:"Duna", author:"Frank Herbert", year:1965, genre:"SF", filmed:2021},
    {name:"Lord of the Rings", author:"JRR Tolkien", year:1975, genre:"Fantasy", filmed:2001},
    {name:"Harry Potter", author:"JK Rowling", year:1999, genre:"Fantasy", filmed:2005},
    {name:"Game of Thrones", author:"JJ Martin", year:1986, genre:"Fantasy", filmed:2012},
];

const Films = books.map(book => book.name)
console.log(Films)