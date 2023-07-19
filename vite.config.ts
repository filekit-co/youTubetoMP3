import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit';


export default defineConfig({
	plugins: [inlangPlugin(), sveltekit()],
	resolve: {
		alias: {
			'@src': path.resolve('/src'),
			'@layouts': path.resolve('src/layouts'),
			'@components': path.resolve('src/components'),
			'@store': path.resolve('src/lib/store'),
		}
	}
});
