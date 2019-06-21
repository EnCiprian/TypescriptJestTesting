import container from "../../common/config/ioc_config";
import { SetWorldMessage } from "../../common/functionality/misc/SetWorldMessage";

let setWorldMessage = container.resolve<SetWorldMessage>(SetWorldMessage);

export const andISetTheWorldMessage = and => {
    and(/^i set the message (.*)$/, async endName => {
        setWorldMessage.setWorldMessage(endName);
    })
}