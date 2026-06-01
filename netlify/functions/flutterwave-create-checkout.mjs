import handler from "../../api/flutterwave/create-checkout.js";
import { runNetlifyHandler } from "./_adapter.mjs";

export async function handler(event) {
  return runNetlifyHandler(handler, event);
}
