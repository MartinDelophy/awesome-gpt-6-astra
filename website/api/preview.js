import { loadCatalog } from '../server/catalog.js';
import { createPreviewHandler } from '../server/previews.js';

export default createPreviewHandler({ loadCatalog });
