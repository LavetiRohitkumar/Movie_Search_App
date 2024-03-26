// https://api.themoviedb.org/3/trending/all/week?api_key=6d061fbb7c9c211cff77477e2f8a1f08&language=en-US

const APIURL =
    "https://api.themoviedb.org/3/trending/all/week?api_key=6d061fbb7c9c211cff77477e2f8a1f08&language=en-US";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=6d061fbb7c9c211cff77477e2f8a1f08&query=";

const movieBox = document.querySelector("#movie-box")
const getMovies = async(api) => {
    const response = await fetch(api);
    const data = await response.json();
    showMovies(data.results);
}


const showMovies = (data) => {
    movieBox.innerHTML = "";
    data.forEach(
        (item) => {
            console.log(item)
            // const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            const box = document.createElement("div")
            box.classList.add("box");
            box.innerHTML = `
             <img src="${IMGPATH + item.poster_path}" alt=""/>
             <div class="overlay">
             <div className="title">
                <h2>${item.original_title}</h2>
                <span>${item.vote_average}<span>
             </div>
             <h3>Overview:</h3>
             <p>
                ${item.overview}
             </p>
             </div>
             `;
             movieBox.appendChild(box);
             
            }
            )
            
        }

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if(event.target.value != null){
            getMovies(SEARCHAPI + event.target.value);
        }else{
            getMovies(APIURL);
        }
        
    }
)

getMovies(APIURL);