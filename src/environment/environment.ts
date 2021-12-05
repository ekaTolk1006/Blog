import { Env } from "./interface";
import { apiKey } from "../security/secret";

export const environment:Env  = {
  production: false,
  apiKey: apiKey
};
