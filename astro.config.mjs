import {defineConfig} from "astro/config";
import icon from "astro-icon";

export default defineConfig({
    site: "http://yurina.cafe",
    integrations: [icon()],
});