// initializing variables
let Api = 'https://www.omdbapi.com/?apikey=681282e1&t=';

let title = document.getElementById("title");
let date = document.getElementById("date");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let genre = document.getElementById("genre");
let language = document.getElementById("language");
let desc = document.getElementById("desc");
let collection = document.getElementById("collection");
let awards = document.getElementById("awards");
let writer = document.getElementById("writer");
let img = document.getElementById("img");
let rating = document.getElementById("rating");
let loader = document.getElementById("animation-loader")
let container = document.getElementById("container")


container.classList.add('d-none');
loader.classList.add('d-none')


function searchMovie(){

    loader.classList.remove('d-none')
    let movieName = document.getElementById('movieName');
    let query = Api + movieName.value;
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        loader.classList.add('d-none')
        container.classList.remove('d-none');
        console.log(data);
        title.innerText = data.Title;
        date.innerText = data.Released;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        genre.innerText = data.Genre;
        language.innerText = data.Language;
        desc.innerText = data.Plot;
        collection.innerText = data.BoxOffice;
        awards.innerText = data.Awards;
        writer.innerText = data.Writer;
        img.src = data.Poster;
        rating.innerText = data.imdbRating;
    })

    movieName.value = ''
}