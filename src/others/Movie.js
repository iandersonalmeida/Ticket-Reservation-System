import axios from 'axios';
class Movie{
    
   
    getMovie(movie){ 
        let arrayofMovies = [];
        arrayofMovies.push(movie);
        console.log("Array of movies: ",arrayofMovies);       
        return axios.get(arrayofMovies);
    }
}


export default new Movie()