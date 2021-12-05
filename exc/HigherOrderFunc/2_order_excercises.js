const books = [
    {
        name:"Duna", 
        author:"Frank Herbert", 
        year:1965, 
        genre:"SF", 
        filmed:2021
    },
    {name:"Star Wars", author:"George Lucas", year:1955, genre:"SF", filmed:1975},
    {name:"Lord of the Rings", author:"JRR Tolkien", year:1975, genre:"Fantasy", filmed:2001},
    {name:"Harry Potter", author:"JK Rowling", year:1999, genre:"Fantasy", filmed:2005},
    {name:"Game of Thrones", author:"JJ Martin", year:1986, genre:"Fantasy", filmed:2012},
];

const Films1 = books.map(book => book.name)
console.log(Films1)

const bok = 0
const Films2 = books
    //.map(book => (book.filmed - book.year))
    .map(book => Math.max((book.filmed - book.year)))
let arr = Object.values(books)
let min = Math.min(...arr)

console.log(Films2)
console.log('--')

const Films3 = books.filter(book => book.genre === 'SF'? `${book.genre}`:'')
console.log(Films3)
//console.log(`Filmy Sciencefiction to ${}`)


