/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
  compilerOptions: null,

  // an array of file extensions that should be treated as Svelte components
  extensions: [".svelte"],

  kit: {
    adapter: null,
    amp: false,
    appDir: "_app",
    files: {
      assets: "static",
      lib: "src/lib",
      routes: "src/routes",
      serviceWorker: "src/service-worker",
      setup: "src/setup",
      template: "src/app.html",
    },
    host: null,
    hostHeader: null,
    paths: {
      assets: "",
      base: "",
    },
    prerender: {
      crawl: true,
      enabled: true,
      force: false,
      pages: ["*"],
    },
    target: null,
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: null,
};
