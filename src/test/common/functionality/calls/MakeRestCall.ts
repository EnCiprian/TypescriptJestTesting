import axios, { AxiosResponse } from 'axios';
import { World } from "../world/World";
import continer from "../../config/ioc_config";
import { injectable, inject } from 'inversify';


@injectable()
export class RestCaller {
    
    private world: World
    
    constructor(@inject(World) world: World) {
        this.world = world;
    }

    makeRestCall = uri => {
        return axios.get(uri);
    }

    get = uri  => {
        this.world.setMessage("this is a second message");
    }

    post = uri => {
        this.world.addToResponsePromisesList(axios.post(uri));
    }

    put = uri => {
        this.world.addToResponsePromisesList(axios.put(uri));
    } 
}