import "reflect-metadata";

import container from "../../common/config/ioc_config";
import { VerifyResponse } from "../../common/functionality/verify/VerifyResponse";
import { response } from "express";

let verifier = container.resolve<VerifyResponse>(VerifyResponse);

export const verifyGetResponseWorked = then => {
    then('the employees list is correct', () => {
        verifier.verifyWorld(world => expect(world.getSecondMessage()).toBe("this is a second message"));
        verifier.verifyWorld(world => expect(world.getMessage()).toBe("this is a message"));
    })
}
