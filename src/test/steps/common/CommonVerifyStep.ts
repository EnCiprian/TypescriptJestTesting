import "reflect-metadata";

import container from "../../common/config/ioc_config";
import { VerifyResponse } from "../../common/functionality/verify/VerifyResponse";
import { response } from "express";

let verifier = container.resolve<VerifyResponse>(VerifyResponse);

export const verifyGetResponseWorked = then => {
    then('the employees list is correct', () => {
        verifier.verifyWorld(world => world.getResponsePromise(0).then(resp => expect(resp.status).toBe(200)));
        verifier.verifyWorld(world => expect(world.getMessage()).toBe("this is a message"));
    })
}

export const verifyGetResponseWorkedAgain = then => {
    then('the employees list is correct again', () => {
        verifier.verifyWorld(world => expect(world.getResponsePromise.length).toBe(1));
        verifier.verifyWorld(world => world.getResponsePromise(0).then(resp => expect(resp.status).toBe(200)));
        verifier.verifyWorld(world => expect(world.getMessage()).toBe("that is a message"));
    })
}

export const verifyGetResponseWorkedForNewFeature = then => {
    then('the employees list is correct for the new feature', () => {
        verifier.verifyWorld(world => expect(world.getResponsePromise.length).toBe(1));
        verifier.verifyWorld(world => world.getResponsePromise(0).then(resp => expect(resp.status).toBe(200)));
        verifier.verifyWorld(world => expect(world.getMessage()).toBe("this is another message"));
    })
}


