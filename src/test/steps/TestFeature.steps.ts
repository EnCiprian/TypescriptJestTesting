import { defineFeature, loadFeature } from "jest-cucumber";
import axios, { AxiosResponse } from 'axios';
import { RestCaller } from '../common/functionality/calls/MakeRestCall'
import { VerifyResponse } from '../common/functionality/verify/VerifyResponse';

const feature = loadFeature("./src/test/features/TestFeature.feature"); 

defineFeature(feature, test => {
    
    test("Get the employees details", ({ given, when, then }) => {
        let apiResponse: AxiosResponse<any>;
        let caller: RestCaller;
        let verifier: VerifyResponse;

        given('that i have the employee api', () => {
            caller = new RestCaller();
            verifier = new VerifyResponse();
        });

        when(/^I do a get on the (.*) endpoint$/, async endName => {
            apiResponse = await caller.makeRestCall("https://restcountries.eu/rest/v2/all");
        });

        then('the employees list is correct', () => {
            //expect(apiResponse.status).toBe(200);
            verifier.verifyGetResponseWasOk(apiResponse);
        });
    });
});