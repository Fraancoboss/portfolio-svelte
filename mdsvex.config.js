/** @type {import('mdsvex').MdsvexOptions} */
const config = {
	extensions: ['.md'],
	layout: '$lib/components/PostLayout.svelte',
	smartypants: {
		quotes: true,
		dashes: 'oldschool'
	}
};

export default config;
