import axios from 'axios'

const FACT_API_URL = 'http://localhost:8080'
class factDataService {
    retrieveAllFacts() {
        return axios.get(`${FACT_API_URL}/facts`);
    }

    retrieveFact(id) {
        return axios.get(`${FACT_API_URL}/facts/${id}`);
    }

    updateFact(id, fact) {
        return axios.put(`${FACT_API_URL}/facts/${id}`, fact);
    }

    deleteFact(id){
        return axios.delete(`${FACT_API_URL}/facts/${id}`);
    }
    createTask(fact) {
        return axios.post(`${FACT_API_URL}/facts/`, fact);
    }
}
export default new factDataService()