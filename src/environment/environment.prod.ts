import { Env } from "./interface";
import { apiProdKey } from "../security/secret";

export const environment:Env = {
    production: true,
    apiKey: apiProdKey
};
  