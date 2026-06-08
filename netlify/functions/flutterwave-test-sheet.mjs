import testSheet from "../../api/flutterwave/test-sheet.js";
import { runNetlifyHandler } from "../lib/adapter.mjs";

export async function handler(event) {
  return runNetlifyHandler(testSheet, event);
}
