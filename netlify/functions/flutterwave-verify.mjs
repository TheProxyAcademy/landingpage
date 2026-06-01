import handler from "../../api/flutterwave/verify.js";
import { runNetlifyHandler } from "./_adapter.mjs";

export async function handler(event) {
  return runNetlifyHandler(handler, event);
}
