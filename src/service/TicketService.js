import axios from "axios";

const TICKET_NAME_URL = "http://localhost:8080/api/ian/tickets";

class TicketService{
    createTicketName(ticketName){
        return axios.post(TICKET_NAME_URL, ticketName);
    }
}

export default new TicketService()