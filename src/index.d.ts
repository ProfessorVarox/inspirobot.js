import {Flow} from "./index";

declare module "inspirobot" {
    export function generateImage(): Promise<string>;
    export class FlowClient {
        public generateFlow(options?: {newSessionId?: boolean}): Promise<Flow>
    }
}
