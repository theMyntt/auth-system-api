import * as crypto from "crypto-js";

export function HashText(text: string): string {
  return crypto.SHA256(text).toString();
}