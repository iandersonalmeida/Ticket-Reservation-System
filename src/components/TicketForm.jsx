import React, { Component } from 'react';
import images from './images/images';

class TicketForm extends Component {
    constructor(props){
        super(props);
        this.state = {ticketName: ''};

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleTextInput(event){
        this.setState({ticketName: event.target.value});
        console.log("Ticket: ", this.state.ticketName);
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.ticketName);
        event.preventDefault();
      }
   
    render() {
        return (
            <div className='div1'>
                <h1>Ticket Compoment</h1>  
                <img src={images.homepic} alt="phoenix logo" className="image"/> 
                     <form onSubmit={this.handleSubmit}>
                        <label> 
                            Ticket Name:
                            <input type="text" value={this.state.ticketName} onChange={this.handleTextInput} />
                        </label>
                        <button className='movieBtn' type='submit' value="Submit" >I am ready!</button>
                     </form>

            </div>
        );
    }
}

export default TicketForm;