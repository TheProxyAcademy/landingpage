import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { loadEnv } from "vite";

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString();
      if (!raw) {
        resolve(undefined);
        return;
      }
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(undefined);
      }
    });
    req.on("error", reject);
  });
}

function createMockResponse(nodeRes) {
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      if (!nodeRes.headersSent) {
        nodeRes.statusCode = this.statusCode;
        nodeRes.setHeader("Content-Type", "application/json");
        nodeRes.end(JSON.stringify(payload));
      }
    },
  };
  return res;
}

/**
 * Serve /api/* using Vercel-style handlers in ./api during `vite` dev.
 */
export function vercelApiPlugin() {
  let envLoaded = false;

  return {
    name: "vercel-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const urlPath = req.url?.split("?")[0] || "";
        if (!urlPath.startsWith("/api/")) {
          next();
          return;
        }

        if (!envLoaded) {
          const env = loadEnv(server.config.mode, server.config.root, "");
          Object.assign(process.env, env);
          envLoaded = true;
        }

        const relative = urlPath.replace(/^\/api\//, "").replace(/\/$/, "");
        if (!relative || relative.includes("..")) {
          res.statusCode = 404;
          res.end("Not found");
          return;
        }

        const handlerPath = path.join(server.config.root, "api", `${relative}.js`);
        if (!fs.existsSync(handlerPath)) {
          next();
          return;
        }

        try {
          const mod = await import(
            `${pathToFileURL(handlerPath).href}?t=${Date.now()}`
          );
          const handler = mod.default;
          if (typeof handler !== "function") {
            res.statusCode = 500;
            res.end("API handler is not a function");
            return;
          }

          const body =
            req.method === "POST" || req.method === "PUT" || req.method === "PATCH"
              ? await readBody(req)
              : undefined;

          const mockReq = {
            method: req.method,
            headers: req.headers,
            body,
          };

          await handler(mockReq, createMockResponse(res));
        } catch (e) {
          console.error("[vercel-api-dev]", urlPath, e);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                ok: false,
                error: e?.message || "API handler error",
              })
            );
          }
        }
      });
    },
  };
}
