import { PUBLIC_BASE_URL } from "$env/static/public";
import {languageCodes, type LanguageCode} from '$lib/data'
import {initAcceptLanguageHeaderDetector, initRootSlugDetector} from '$lib/lang-detectors'
import {detectLanguage, type Detector} from '@inlang/sdk-js/detectors'


export const canonicalUrl = (pathname: string) => pathname ? `${PUBLIC_BASE_URL}${pathname}`: `${PUBLIC_BASE_URL}`;

export const detectLanguageOrFallback = async (url: URL |undefined ,headers: Headers | undefined, referenceLanguage: string) => {
  // FYI detectors prioritize orders if first detector match lang, it returns lang directly.
  let detectors: Detector[] = [];
  // #1 https://filekit.co/es-419 -> than prepare es-419
  if (url?.pathname) {
    detectors.push(initRootSlugDetector(url)) 
  }
  
  // #2 if route does not exist or invalid lang routes were given.
  // #2-1. prepare language detector
  if (headers) {
    const acceptLangDetector = initAcceptLanguageHeaderDetector(headers)
    detectors.push(acceptLangDetector)
  }

  // #3. detect language
  try {
    const language = await detectLanguage({referenceLanguage, languages: languageCodes, allowRelated: true}, ...detectors)
    return languageCodes.includes(language) ? language: referenceLanguage
  } catch (e) {
    console.error(e)  
    return referenceLanguage
  }
}