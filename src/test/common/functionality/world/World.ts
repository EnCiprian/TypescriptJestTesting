import { AxiosResponse } from 'axios';
import { injectable } from 'inversify';

@injectable()
export class World {
    private response: AxiosResponse
}