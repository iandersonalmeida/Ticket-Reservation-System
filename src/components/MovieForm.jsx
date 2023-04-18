import React, { Component } from 'react';
import images from './images/images';
import './css/movieform.css';
import MovieService from '../service/MovieService';
import DateService from '../service/DateService';
//import Movie from '../others/Movie';



class MovieForm extends Component {
    constructor(props){
        super(props);
        this.state = {
           movies: [],
           dates: [],
           selectedMovie: [],
           selectedData: [],
        };       
        
        this.handleInputMovie = this.handleInputMovie.bind(this);
        this.handleSelectDate = this.handleSelectDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }   
    
    
    componentDidMount(){
        //return a Promise object
        MovieService.getMovies().then((result1) =>
            {this.setState({movies: result1.data})});              

        DateService.getDates().then((result2) =>
        {this.setState({dates: result2.data })});    
    }   

    handleInputMovie(movie){
        console.log("movie :", movie);
        this.setState({[this.state.selectedMovie.push(movie)]:movie},
            () => console.log("selected Movie :", this.state.selectedMovie)
            )                     
    }
    
    handleSelectDate = (event) => {
        let date = event.target.value;
        console.log(date);
        this.setState({[this.state.selectedData.push(date)]: date},
            () => console.log("selected data: ",this.state.selectedData)
        )

    }
    
    handleSubmit = (event) =>{
        event.preventDefault(); 
        //alert(JSON.stringify(this.state.selectedMovie));      
       // alert("Worked!");
    }

    handleSave = () =>{ 
       let movies = [];            
       movies =  JSON.stringify(this.state.selectedMovie);
       console.log("Movie in Json = ",movies);
        MovieService.createMovie(movies).then(() => {
            console.log("sent selected movies = ", movies); //talvez converter isso em json?
           },  (error) => {
            console.log("sending error: "+error); });   
        
        let dates = [];
        dates = JSON.stringify(this.state.selectedData);
        console.log("Date in Json = ", dates);
        DateService.createDate(dates).then(() => {
            console.log("sent selected dates = ", dates);
        }, (error) => {
            console.log("sending error: "+error)});   
            
       window.location.href="ticketform";     
    }    
    
    render() {

       // console.log("I am render(). I am the first.")
            
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
                                <input type="checkbox"  onChange={this.handleInputMovie.bind(this,movie) }/>
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
                                         onClick={(event) => this.handleSave(event)} >
                                          Create your Ticket </button> 
                                              
                        </div>                        
                       
                    </div>                    
                </form>
            </div>
        );
    }
}

export default MovieForm;