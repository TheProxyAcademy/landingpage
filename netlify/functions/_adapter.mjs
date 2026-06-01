/**
 * Bridge Vercel-style (req, res) handlers to Netlify Functions events.
 */
export async function runNetlifyHandler(vercelHandler, event) {
  const rawBody = event.body
    ? event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString()
      : event.body
    : "";

  let parsedBody;
  if (rawBody) {
    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      parsedBody = undefined;
    }
  }

  const headers = {};
  for (const [key, value] of Object.entries(event.headers || {})) {
    headers[key.toLowerCase()] = value;
  }

  let statusCode = 200;
  let responseBody = "";

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(payload) {
      responseBody = JSON.stringify(payload);
    },
  };

  const req = {
    method: event.httpMethod,
    headers,
    body: parsedBody,
  };

  await vercelHandler(req, res);

  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: responseBody,
  };
}
