import { AxiosResponse } from 'axios';

export class VerifyResponse {
    verifyGetResponseWasOk(response: AxiosResponse) {
        expect(response.status).toBe(200);
    }
}