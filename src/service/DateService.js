import axios from "axios";

const DATE_URL = "http://localhost:8080/api/ian/dates";

class DateService{
    getDates(){
        return  axios.get(DATE_URL);
    }

    createDate(...date){
        return axios.post(DATE_URL, date);
    }
}

export default new DateService()