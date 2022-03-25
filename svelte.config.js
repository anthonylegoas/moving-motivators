import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.cjs";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		vite: {
			plugins: [
				precompileIntl('locales')
			]
		}
	}
};

export default config;
