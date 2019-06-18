import axios, { AxiosResponse } from 'axios';

export class RestCaller {
    private axiosRespone: AxiosResponse<any>;
    makeRestCall = async uri => {
        this.axiosRespone = await axios.get(uri);
        return this.axiosRespone;
    }
}