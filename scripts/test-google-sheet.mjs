/**
 * Simulate a post-payment sheet write without Flutterwave.
 *
 * Usage:
 *   pnpm test:sheet
 *   pnpm test:sheet -- --email=you@example.com
 */
import { loadEnv } from "vite";
import {
  mockFlutterwavePayment,
  mockFocusflowRegistration,
  storeRegistration,
} from "../api/flutterwave/_sheets.js";

const root = new URL("..", import.meta.url).pathname;
Object.assign(process.env, loadEnv("development", root, ""));

const emailArg = process.argv.find((a) => a.startsWith("--email="));
const email = emailArg?.split("=")[1];

const registration = mockFocusflowRegistration(
  email ? { parentEmail: email } : {}
);
const flutterwave = mockFlutterwavePayment(
  email
    ? {
        customer: {
          name: registration.parentFullname,
          email,
          phone_number: registration.parentPhone,
        },
      }
    : {}
);

console.log("Webhook URL:", process.env.GOOGLE_SHEETS_WEBHOOK_URL || "(not set)");
console.log("Sending test registration for:", registration.parentEmail);

const { stored, storeError } = await storeRegistration({ registration, flutterwave });

if (stored) {
  console.log("OK — row should appear in the Registrations sheet.");
  console.log("tx_ref:", flutterwave.tx_ref);
  process.exit(0);
}

console.error("FAILED — sheet was not updated.");
if (storeError?.hint) console.error("Hint:", storeError.hint);
console.error(JSON.stringify(storeError, null, 2));
process.exit(1);
