import {EnvironmentVariables} from "../../models/environment";

export function setEnvironment(envVariables:Partial<EnvironmentVariables>) {
    for (const [key, value] of Object.entries(envVariables)) {
        process.env[key] = value;
    }
}
