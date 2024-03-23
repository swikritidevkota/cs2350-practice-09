//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { movies }  from './movies'

for(let m of movies){
    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = `
        <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    `
    m_thumb.onclick = function(){
        displayMovie(m)
    }
}

let featured_movie = document.querySelector(".featured")
function displayMovie(movie){
    featured_movie.innerHTML=`
        <div class="card">
            <div class="card-header">
              ${movie.title}
            </div>
            <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title"><small>${movie.year}, ${movie.genre}</small></h5>
              <p class="card-text">${movie.plot}</p>
            </div>
            <div class="card-footer text-body-secondary">
              <div class="row row-cols-3">
                <div class="col"><strong>Rating: </strong>${movie.rating}</div>
                <div class="col"><strong>Rated: </strong>${movie.rated}</div>
                <div class="col"><strong>Votes: </strong>${movie.votes}</div>
              </div>
            </div>
          </div>
    `
}
function searchmovies(event){
    event.preventDefault()

    let input = document.querySelector('[type = "search"]').value || ""
    let count = 0
    for(let m of movies){
        if(m.title.toUpperCase().indexOf(input.toUpperCase())== -1){
            document.querySelector(`#m${m.id}`).classList.add(`d-none`)
        }else{
            document.querySelector(`#m${m.id}`).classList.remove(`d-none`)
            count++
        }
    }

    featured_movie.innerHTML = count == 0 ? 'Nothing was Found' : ''
}

document.querySelector("button").onclick = searchmovies
document.querySelector('[type="search"]').onsearch = searchmovies
document.querySelector("form").onsubmit = searchmovies