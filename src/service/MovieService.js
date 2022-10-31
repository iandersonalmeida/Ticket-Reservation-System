import axios from 'axios';

const MOVIE_URL = "http://localhost:8080/api/ian/movies";


class MovieService{
    getMovies(){
        return axios.get(MOVIE_URL);
    }   
    
    createMovie(...movie){
            return axios.post(MOVIE_URL, movie);
    }
}

export default new MovieService()