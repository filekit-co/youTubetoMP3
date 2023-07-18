<script lang="ts">
  import { page } from "$app/stores";
  import type { HeaderProps, UpdateHeaderProps } from "@store/types";

  const defaultHeaderProps: HeaderProps = {
    title: "Convert YouTube videos to MP3 - Free online convert tool",
    author: "filekit.co",
    keywords:
      "Convert YouTube videos to MP3, Download YouTube video, Convert a YouTube video to any format",
    siteName: "filekit.co - YouTube to MP3",
    url: "https://youtubetomp3.pages.dev/",
    image: "",
    description:
      "Filekit - Easy tool to convert YouTube videos to MP3. Convert files into the desired format with just one click. Free for lifetime usage.",
  };

  const pageHeaderProps: UpdateHeaderProps = $page.data?.headerProps || {};

  const p = { ...defaultHeaderProps, ...pageHeaderProps };
</script>

<svelte:head>
  <title>{p.title}</title>
  <meta name="author" content={p.author} />
  <meta name="keywords" content={p.keywords} />
  <link rel="canonical" href={p.url} />
  <meta name="description" content={p.description} />

  <!-- https://searchadvisor.naver.com/guide/markup-structure -->
  <meta name="robots" content="index,follow" />

  <!-- TODO: upload app key -->
  <meta name="apple-itunes-app" content="" />
  <meta name="google-play-app" content="" />
  <meta name="google-site-verification" content="" />
  <!-- TODO fin -->

  <meta property="og:title" content={p.title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={p.image} />
  <meta property="og:url" content={p.url} />
  <meta property="og:site_name" content={p.siteName} />
  <meta property="og:description" content={p.description} />
  <meta property="og:app_id" content="" />

  <!-- TODO -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content="" />
  <meta property="twitter:title" content={p.title} />
  <meta property="twitter:description" content={p.description} />
  <meta name="twitter:image:src" content="" />
  <meta property="twitter:url" content={p.url} />
  <!-- TODO -->

  <meta name="apple-mobile-web-app-title" content="filekit.co" />
  <meta name="application-name" content="filekit.co" />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:700"
    rel="stylesheet"
  />
</svelte:head>
