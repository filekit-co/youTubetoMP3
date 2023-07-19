import '@inlang/sdk-js/no-transforms'
import { languageCodes, referenceLanguage } from '$lib/data/locale';
import { detectLanguageOrFallback } from '$lib/store/utils';
import {  addRuntimeToLocals, initSvelteKitServerRuntime } from '@inlang/sdk-js/adapter-sveltekit/server'
import type { Handle } from '@sveltejs/kit';

const excludeI18nRoute = ['inlang', 'sitemap.xml', 'terms']

export const handle: Handle = (async ({ event, resolve }) => {
	// top level route
	const initialRoute = event?.url?.pathname.split('/').at(1)
	if (initialRoute && excludeI18nRoute.includes(initialRoute)) {
		const response = await resolve(event);
		return response;		
	} 

	const language = await detectLanguageOrFallback(
			event?.url, 
			event?.request?.headers, 
			referenceLanguage
	)
	if (!initialRoute) {
		return new Response('Redirect', {status: 302, headers: { Location: `/${language}` }});
	}
	const runtime = initSvelteKitServerRuntime({ language, referenceLanguage, languages: languageCodes })
	addRuntimeToLocals(event.locals, runtime)		
	const response = await resolve(event);
  return response;
})

