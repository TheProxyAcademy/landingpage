import createCheckout from "../../api/flutterwave/create-checkout.js";
import { runNetlifyHandler } from "../lib/adapter.mjs";

export async function handler(event) {
  return runNetlifyHandler(createCheckout, event);
}
