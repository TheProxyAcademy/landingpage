/**
 * Paste this entire file into Google Apps Script (Extensions → Apps Script)
 * bound to your spreadsheet. Deploy as Web App (Execute as: Me, Anyone).
 *
 * Optional: Project Settings → Script properties → WEBHOOK_TOKEN = same as
 * GOOGLE_SHEETS_WEBHOOK_TOKEN in Vercel.
 */

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet() {
  return jsonOut({
    ok: true,
    message: "FocusFlow webhook is live. Send POST with Content-Type: application/json.",
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut({
        ok: false,
        error:
          "Missing POST body. Do not click Run on doPost in the editor. " +
          "Test with curl or your site after payment. If using fetch from a server, " +
          "ensure POST is not converted to GET by a redirect.",
      });
    }

    const body = JSON.parse(e.postData.contents);

    const expectedToken = PropertiesService.getScriptProperties().getProperty(
      "WEBHOOK_TOKEN"
    );
    if (expectedToken && body.token !== expectedToken) {
      return jsonOut({ ok: false, error: "Unauthorized" });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Registrations") || ss.insertSheet("Registrations");

    const fw = body.flutterwave || {};
    const reg = body.registration || {};
    const customer = fw.customer || {};

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "storedAt",
        "source",
        "tx_ref",
        "transaction_id",
        "status",
        "amount",
        "currency",
        "charged_amount",
        "created_at",
        "parentFullname",
        "parentEmail",
        "parentPhone",
        "childFullname",
        "childAge",
        "schedulePreference",
        "paymentPlan",
      ]);
    }

    sheet.appendRow([
      body.storedAt || new Date().toISOString(),
      body.source || "",
      fw.tx_ref || "",
      fw.id || "",
      fw.status || "",
      fw.amount || "",
      fw.currency || "",
      fw.charged_amount || "",
      fw.created_at || "",
      reg.parentFullname || "",
      reg.parentEmail || customer.email || "",
      reg.parentPhone || customer.phone_number || "",
      reg.childFullname || "",
      reg.childAge || "",
      reg.schedulePreference || "",
      reg.paymentPlan || "",
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}
