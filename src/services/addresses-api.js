import axios from 'axios';

const API_URL = 'https://api-adresse.data.gouv.fr/'

const config = {
    method: 'get',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
};

class ApiService {
    constructor() {

    }

    static async search(query, options) {

        return axios.get(API_URL + 'search', {
            ...config,
            params: {
                q: query.replace(' ', '+')
            },
            ...options
        })
            .then(res => res.data)
            .then(json => {
                return json && json.features
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                // quoi qu'il arrive
            });
    }

}

export default ApiService