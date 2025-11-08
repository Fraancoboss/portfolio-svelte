import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md'],
	layout: resolve(__dirname, 'src/lib/components/PostLayout.svelte'),
	smartypants: {
		quotes: true,
		dashes: 'oldschool'
	}
};

export default config;
