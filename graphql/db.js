import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?"
export const getMovies = (limit,rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0) {
        REQUEST_URL += 'limit='+limit;
    }
    if(rating>0){
        REQUEST_URL +='&minimum_rating='+rating;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json=>json.data.movies);
}



/*
let movies = [
    {   
        id:0,
        name: "Start Wars - The new onee",
        score: 1
    },
    {
        id:1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id:2,
        name: "The Godfater I",
        score : 99
    },
    {
        id:3,
        name: "Logan",
        score : 2
    }

];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

export const getMovies = () => movies;

export const deleteMovie = (id) =>{
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}


export const addMovie = (name,  score) => {
    const newMovie ={
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}
*/




