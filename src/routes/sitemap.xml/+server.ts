import type { RequestHandler } from "@sveltejs/kit";
import { allPages } from "$lib/data/pages";

export const prerender = true;
const baseSite = 'https://youtubetomp3.pages.dev'

export const GET = (() => {
    const options: ResponseInit = {
      headers: {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
      }
    }
    const urls = getAllUrls(baseSite);
    const body = sitemap(urls);

    return new Response(body, options);
})satisfies RequestHandler; 

const getAllUrls = (site:string) => {
  const urls: string[] = [];

  allPages.map((item) => {
    const url = `${site}/${item.href}`
    urls.push(url)
  })

  return urls;
}

const sitemap = (urls: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
  ${urls.map((url: string) => `
  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}  
  </urlset>`;