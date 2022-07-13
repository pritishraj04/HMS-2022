import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;',
          },
        },
      },
      resolve: {
        alias: {
          $src: path.resolve("./src"),
          $lib: path.resolve("./src/lib"),
          $stores: path.resolve("./src/stores"),
          $assets: path.resolve("./src/assets"),
          $comp: path.resolve("./src/lib/components"),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
