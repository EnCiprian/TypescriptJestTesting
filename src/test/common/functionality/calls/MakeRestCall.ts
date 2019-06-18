import axios, { AxiosResponse } from 'axios';

export class RestCaller {
    private axiosRespone: AxiosResponse<any>;
    makeRestCall = async uri => {
        this.axiosRespone = await axios.get(uri);
        return this.axiosRespone;
    }

    get = async uri  => {
        this.axiosRespone = await axios.get(uri);
        return this.axiosRespone;
    }

    post = async uri => {
        this.axiosRespone = await axios.post(uri);
        return this.axiosRespone;
    }

    put = async uri => {
        this.axiosRespone = await axios.put(uri);
        return this.axiosRespone;
    } 
}