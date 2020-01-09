import axios from 'axios';
import { endPoint } from '../aws-exports.json'
class AxiosServies {
    constructor(){
        this.instance = axios.create({
            baseURL: endPoint,
        });
        this.instance.interceptors.response.use(this.handleSuccess, this.handleError)
    }

    handleSuccess (response) {
        return response;
    }

    handleError(error){
        return Promise.reject(error);
    }
}

export default new AxiosServies();