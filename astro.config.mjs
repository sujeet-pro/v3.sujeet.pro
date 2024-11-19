// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_CANONICAL_ORIGIN } from "./src/constants";

// https://astro.build/config
export default defineConfig({
  site: SITE_CANONICAL_ORIGIN,
  integrations: [sitemap()],

  prefetch: {
    prefetchAll: true,
  },
  scopedStyleStrategy: "where",
  output: "static",
  redirects: {
    "/gh": "https://github.com/sujeet-pro",
    "/in": "https://www.linkedin.com/in/sujeetkrjaiswal/",
    "/linkedin": "https://www.linkedin.com/in/sujeetkrjaiswal/",
    "/twitter": "https://twitter.com/sujeetpro",
    "/x": "https://twitter.com/sujeetpro",
    "/ig": "https://www.instagram.com/sujeet__pro/",
    "/instagram": "https://www.instagram.com/sujeet__pro/",
    "/dev-to": "https://dev.to/sujeetpro",
    "/hashnode": "https://hashnode.com/@sujeetpro",
    "/medium": "https://medium.com/sujeet-pro",
    "/stackoverflow": "https://stackoverflow.com/users/5570700/sujeet-jaiswal",
    "/cv": "https://docs.google.com/document/d/1G-zdwqHLTJ9eoDAnyMeWKkb2Bf-0i8dfQ6NWYJ_osL0/edit?usp=sharing",
  },
});
