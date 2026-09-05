import { handleCatalog } from '../server/catalog.js';

export default async function catalogHandler(req, res) {
  const response = await handleCatalog(req);
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  res.end(await response.text());
}
