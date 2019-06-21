import { Container } from "inversify"
import { World } from "../functionality/world/World"
import { RestCaller } from "../functionality/calls/MakeRestCall"

let container = new Container();

container.bind<World>(World).toSelf();
container.bind<RestCaller>(RestCaller).toSelf();

export default container;