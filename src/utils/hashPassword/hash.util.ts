import * as crypto from "crypto-js";

export function HashText(text: string): string {
  return crypto.MD5(text).toString();
}