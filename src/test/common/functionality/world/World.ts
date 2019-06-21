import "reflect-metadata";

import { AxiosResponse } from 'axios';
import { injectable } from 'inversify';

@injectable()
export class World {
    private responsePromises: Promise<AxiosResponse<any>>[];
    private message: string;
    private secondMessage: string;

    async addToResponsePromisesList(promise: Promise<AxiosResponse<any>>) {
        this.responsePromises.push(promise);
        return await promise;
    }

    setMessage(message: string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

    setSecondMessage(message: string) {
        this.secondMessage = message;
    }

    getSecondMessage() {
        return this.secondMessage;
    }

    getResponsePromise(index: number) {
        return this.responsePromises[index];
    }
}
