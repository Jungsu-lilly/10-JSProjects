const KEY = 'c34435b5564f5a284f362fe8f64dda7a';
const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}`;

const IMGPATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI =
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.querySelector('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


// initially get popular Movies
getMovies(APIURL);


async function getMovies(url){ // get movie
    console.log(url);
    const resp = await fetch(url);
    const respData = await resp.json();
    
    console.log(respData);

    console.log(respData.results);

    showMovies(respData.results);
}


function showMovies(movies){

    //clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie; // destructuring (in JS)

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
    //input 또는 button 클릭 이벤트가 발생 했을때 페이지가 리로드가 되는데 그 현상을 막아줌
    e.preventDefault();
    
    const searchTerm = search.value;

    if(searchTerm){
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
});