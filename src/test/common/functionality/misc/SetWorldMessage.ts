import { injectable, inject } from "inversify";
import { World } from "../world/World";

@injectable()
export class SetWorldMessage {
    private world: World;

    constructor(@inject(World) world: World) {
        this.world = world;
    }

    setWorldMessage(mes: string) {
        this.world.setMessage(mes);
    }
}