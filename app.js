
let apiKey = "https://www.omdbapi.com/?i=tt3896198&apikey=23df8483&t=";

console.log(apiKey);


let title = document.getElementById('title');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let ratings = document.getElementById('ratings');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let collection = document.getElementById('collection');
let genre = document.getElementById('genre');
let language = document.getElementById('language');
let writer = document.getElementById('writer');
let year = document.getElementById('year');
let votes = document.getElementById('votes');
let poster = document.getElementById('poster');



function search() {

    let query = document.getElementById('movieSearch').value;
    let movieYear = document.getElementById('year').value;

    let api = apiKey + query + `&y=` + movieYear;
    console.log(api)
    fetch(api).then((movieData) => {
        console.log(movieData)


        return movieData.json();
    }).then((movie) => {
        console.log(movie);
        title.innerText = movie.Title;
        date.innerText = movie.Released;
        desc.innerText = movie.Plot;
        actors.innerText = movie.Actors;
        director.innerText = movie.Director;
        ratings.innerText = movie.imdbRating;
        collection.innerText = movie.BoxOffice;
        poster.src = movie.Poster;
        genre.innerText = movie.Genre;
        writer.innerText = movie.Writer;
        language.innerText = movie.Language;
        year.innerText = movie.Year;



    })
}





