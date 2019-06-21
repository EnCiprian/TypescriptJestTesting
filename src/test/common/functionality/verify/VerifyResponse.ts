import { AxiosResponse } from 'axios';
import { World } from '../world/World';
import { injectable, inject } from 'inversify';

@injectable()
export class VerifyResponse {
    private world: World;

    constructor(@inject(World) world: World) {
        this.world = world
    }

    verifyWorld(callback: (world: World) => any) {
        callback(this.world)
    }
}