import container from "../../common/config/ioc_config";
import { RestCaller } from "../../common/functionality/calls/MakeRestCall";

const restCaller = container.resolve<RestCaller>(RestCaller);

export const whenIDoTheStandardGet = when => {
    when(/^I do a get on the (.*) endpoint$/, async endName => {
        restCaller.get("https://restcountries.eu/rest/v2/all");
    })
}
