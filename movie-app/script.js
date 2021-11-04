const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c34435b5564f5a284f362fe8f64dda7a&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=c34435b5564f5a284f362fe8f64dda7a&query=";

const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


// initially get popular Movies
getMovies(APIURL);


async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();

    showMovies(respData.results);
}


function showMovies(movies){

    //clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie; // restructuring (in JS)

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img 
                src="${IMGPATH + poster_path}" 
                alt="no image: ${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class = "${getClassByRate
                (vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    }else if (vote >= 7){
        return 'orange';
    }
    else {return 'red';}
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});