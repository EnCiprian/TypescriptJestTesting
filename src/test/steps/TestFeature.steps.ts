import { defineFeature, loadFeature } from "jest-cucumber";
import axios, { AxiosResponse } from 'axios';

const feature = loadFeature("./src/test/features/TestFeature.feature"); 

defineFeature(feature, test => {
    test("Get the employees details", ({ given, when, then }) => {
        let apiResponse: AxiosResponse<any>;
        given('that i have the employee api', () => {

        });

        when(/^I do a get on the (.*) endpoint$/, async endName => {
            apiResponse = await axios.get("https://restcountries.eu/rest/v2/all");
        });

        then('the employees list is correct', () => {
            expect(apiResponse.status).toBe(200);
        });
    });
});