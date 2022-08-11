import React, { Component } from 'react';
import images from './images/images';
import './css/movieform.css';
import MovieService from '../service/MovieService';
import DateService from '../service/DateService';



class MovieForm extends Component {
    constructor(props){
        super(props);
        this.state = {
           movies: [],
           dates: [],
           selectedMovie: [],
        };       
        
        this.handleInputMovie = this.handleInputMovie.bind(this);
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }   
    
    
    componentDidMount(){
        MovieService.getMovies().then((result1) =>
            {this.setState({movies: result1.data})});              

        DateService.getDates().then((result2) =>
        {this.setState({dates: result2.data })});    
    }   

    handleInputMovie(event){

        let movies = [];       
        movies = [event.target.value];  
        
        console.log("object", movies);  
        //console.log("size of Array =",movies.length);   
        //console.log("selected movie: "+movies);         
        movies.map((movie) =>{
            this.setState({selectedMovie : movie}); 
            console.log("selected movie: ", this.state.selectedMovie);           
            return movie;
            }            
        );  

        
        
        //console.log("selected movie: "+movies);
    }
    
    handleSelectDate = (event) => {
        let date = event.target.value;
        console.log(date);
    }
    
    handleSubmit = (event) =>{
        event.preventDefault(); 
        //alert(JSON.stringify(this.state.selectedMovie));      
       // alert("Worked!");
    }

    handleSave = () =>{ 
       let movies = [];            
       movies =  this.state.selectedMovie;
        console.log("Json? = ",movies);
        MovieService.createMovie(movies).then((response) => {
            console.log("sent selected movie = ", movies); //talvez converter isso em json?
           },  (error) => {
            console.log("error: "+error); });            
    }    
    
    render() {

            
        return (
            <div>
                <h1>Movie Component</h1>  
                <img src={images.homepic} alt="phoenix logo" className="image"/>  
                <form onSubmit={this.handleSubmit} >
                    <div className="div1">
                        <h3>Movies</h3>
                        <div>                    
                            {this.state.movies.map(
                            (movie, index) => 
                            <div key = {index} >
                                <input type="checkbox" value={movie} onChange={this.handleInputMovie }/>
                                 <span key = {movie.movieName}>{movie.movieName}</span> 

                                 <div>
                                    <label> Choose your date: </label>
                                    <div className='div2'> 
                                      <select onChange={this.handleSelectDate}>
                                            <option value="">Nothing selected</option>
                                           {this.state.dates.map(
                                               (date) =>                                                 
                                                     <option  key={date.dateId} value={date.date} >{date.date} </option>                                                
                                           )}                                    
                                     </select>
                                    </div>  
                                 </div>  

                                                             
                             </div>     
                                                   
                        )}   
                         <button className='movieBtn' type='submit'
                                         onClick={(event) => this.handleSave(event)} >Create your Ticket</button> 
                                              
                        </div>                        
                       
                    </div>                    
                </form>
            </div>
        );
    }
}

export default MovieForm;