import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'http://yurina.cafe',
  integrations: [icon(), solidJs()]
});