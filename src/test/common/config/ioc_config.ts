import { Container } from "inversify"
import { World } from "../functionality/world/World"

const container = new Container();

container.bind<World>(World).toSelf().inSingletonScope();

export default container;