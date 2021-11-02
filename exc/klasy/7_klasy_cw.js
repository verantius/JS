function Movies (title, director, year, genre ) {
    this.title = title
    this.director = director
    this.year = year
    this.genre = genre
}
    Movies.prototype.getSummary = function() {
        return `The movie ${this.title} was directed by ${this.director} in the year ${this.year} and it's classified to ${this.genre} genre`
    }

const Phantom = new Movies('Star Wars: Phantom Menace','George Lucas','2001','Science Fiction')
document.getElementById('fill1').innerHTML = Phantom.getSummary()


class Serials {
    constructor(subject, age, platform) {
        this.title = subject
        this.year = age
        this.platform = platform
    }
    getPlatform = function() {
        return `${this.platform}`
    } 
}
class Serial extends Serials {
    constructor(subject, age, platform, genre){
        super(subject, age, platform);
        this.genre = genre
    }
    getSum = function() {
        return `You can watch ${this.title} on ${this.getPlatform()}`
    }

}


const GoT = new Serial('Game of Thrones','2013','HBO','Fantasy')

document.getElementById('fill2').innerHTML = GoT.getSum()