import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2, kvCache } from "@emdash-cms/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
    adapter: cloudflare(),
    cache: {
       enabled: true,
       provider: cacheCloudflare(),
     },
     routeRules: {
       "/": { maxAge: 300, swr: 86400 },
     },
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
            storage: r2({ binding: "MEDIA" }),
			objectCache: kvCache({ binding: "CACHE" }),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Playfair Display",
			cssVariable: "--font-heading",
			weights: [400, 500, 600, 700],
			fallbacks: ["serif"],
		},
	],
	devToolbar: { enabled: false },
});
