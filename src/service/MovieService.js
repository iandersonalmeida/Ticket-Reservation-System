import axios from 'axios';

const MOVIE_URL = "http://localhost:8080/api/ian/movies";


class MovieService{
    getMovies(){
        return axios.get(MOVIE_URL);
    }   
    
    createMovie(...movieId){
            return axios.post(MOVIE_URL, movieId);
    }
}

export default new MovieService()