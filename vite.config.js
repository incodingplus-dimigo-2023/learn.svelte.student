import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
export default {
	build: {
		target: 'esnext'
	},

	logLevel: 'info',

	plugins: [
		sveltekit(),
		{
			name: "configure-response-headers",
			configureServer: (server) => {
				server.middlewares.use((_req, res, next) => {
					res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
					res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
					res.setHeader('x-middleware-next', '1');
					next();
				});
			},configurePreviewServer: (server) => {
				server.middlewares.use((_req, res, next) => {
					res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
					res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
					res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
					res.setHeader('x-middleware-next', '1');
					next();
				});
			},
		},
	],

	server: {
		fs: {
			allow: [path.resolve('.apps')]
		},
		watch: {
			ignored: ['**/.apps/**']
		}
	},

	ssr: {
		noExternal: ['@sveltejs/site-kit']
	},

	optimizeDeps: {
		exclude: ['@sveltejs/site-kit']
	}
};
