import React, { Component } from 'react';

class TicketForm extends Component {
    constructor(props){
        super(props);
        this.state = {ticketName: ''};
    }

   
    render() {
        return (
            <div>
                <h1>Ticket Compoment</h1>  
                     <form>
                        <label> 
                            Ticket Name:
                            <input type="text" />
                        </label>
                     </form>

            </div>
        );
    }
}

export default TicketForm;