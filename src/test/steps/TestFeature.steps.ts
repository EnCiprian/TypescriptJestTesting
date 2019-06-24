import { defineFeature, loadFeature } from "jest-cucumber";
import axios, { AxiosResponse } from 'axios';
import { RestCaller } from '../common/functionality/calls/MakeRestCall';
import { VerifyResponse } from '../common/functionality/verify/VerifyResponse';
import { World } from "../common/functionality/world/World";
import container from "../common/config/ioc_config"; 
import { whenIDoTheStandardGet } from "./common/CommonRestCallsFunctionality";
import { andISetTheWorldMessage } from "./common/CommonMiscFunctionality";
import { verifyGetResponseWorked } from "./common/CommonVerifyStep";

const feature = loadFeature("./src/test/features/TestFeature.feature"); 

defineFeature(feature, test => {
    
    test("Get the employees details", ({ given, when, and, then }) => {
        let apiResponse: AxiosResponse<any>;
        let caller: RestCaller;
        let verifier: VerifyResponse;

        given('that i have the employee api', () => {

        });

        whenIDoTheStandardGet(when);

        andISetTheWorldMessage(and);

        verifyGetResponseWorked(then);
    });
});