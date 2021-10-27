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