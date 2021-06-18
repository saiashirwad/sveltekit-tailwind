//import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';
//const static = require('@sveltejs/adapter-static');
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	//preprocess: preprocess(),
	preprocess: sveltePreprocess({
		postcss: true,
		defaults: {
			style: 'postcss'
		}
	}),
	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		})
	}
};

export default config;
