import React, { Component } from 'react';
import images from './images/images';
import './css/ticketform.css';
import TicketService from '../service/TicketService';

class TicketForm extends Component {
    constructor(props){
        super(props);
        this.state = {ticketName: ''};

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    
    handleTextInput(event){
        this.setState({ticketName: event.target.value});
        console.log("Ticket: ", this.state.ticketName);
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.ticketName);
        event.preventDefault();
      }

      handleError(){
        alert('Submission error!')
      }

      handleSave = (event) =>{
        let ticketName;
        ticketName = this.state.ticketName;
        ticketName =  JSON.stringify(this.state.ticketName);
        console.log("TicketName = ",ticketName);
        TicketService.createTicketName(ticketName).then(() => {
            this.handleSubmit(event);
        }, () => {
            this.handleError();
        })
      }
   
    render() {
        return (
            <div className='div2'>
                <h1>Ticket Compoment</h1>  
                <img src={images.homepic} alt="phoenix logo" className="image"/> 
                     <form onSubmit={this.handleSubmit}>
                        <label> 
                            Ticket Name:                          
                        </label>
                        <input  type="text" value={this.state.ticketName} onChange={this.handleTextInput} />
                        <button className='ticketBtn' type='submit' value="Submit"  
                         onClick={(event) => this.handleSave(event)}>I am ready!</button>
                     </form>

            </div>
        );
    }
}

export default TicketForm;