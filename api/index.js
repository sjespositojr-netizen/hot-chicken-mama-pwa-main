import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverEntryPath = path.join(__dirname, "../dist/server/server.js");

let serverHandler;

async function getServerHandler() {
  if (!serverHandler) {
    const module = await import(serverEntryPath);
    serverHandler = module.default ?? module;
  }
  return serverHandler;
}

function buildRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);

  return new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: ["GET", "HEAD"].includes(req.method) ? undefined : req,
  });
}

async function sendResponse(res, response) {
  res.statusCode = response.status;

  for (const [name, value] of response.headers) {
    if (name.toLowerCase() === "transfer-encoding") continue;
    res.setHeader(name, value);
  }

  if (response.body == null) {
    res.end();
    return;
  }

  const body = Buffer.from(await response.arrayBuffer());
  res.setHeader("content-length", body.length);
  res.end(body);
}

export default async function handler(req, res) {
  const request = buildRequest(req);
  const server = await getServerHandler();
  const response = await server.fetch(request, {}, {});
  await sendResponse(res, response);
}
