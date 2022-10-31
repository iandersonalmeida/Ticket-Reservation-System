import './App.css';
import Home from './components/Home';
import MovieForm from './components/MovieForm';
import TicketForm from './components/TicketForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
   
                 
        <div>
        <BrowserRouter>
            <Routes>
                <Route path ='/phoenix-app-repo' element = {<Home/>}></Route>
                <Route path ='movieform' element = {<MovieForm/>}></Route>
                <Route path ='ticketform' element = {<TicketForm/>}></Route>
            </Routes>
         </BrowserRouter>

        </div>   
    
  );
}

export default App;
