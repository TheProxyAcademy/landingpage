import verifyPayment from "../../api/flutterwave/verify.js";
import { runNetlifyHandler } from "../lib/adapter.mjs";

export async function handler(event) {
  return runNetlifyHandler(verifyPayment, event);
}
