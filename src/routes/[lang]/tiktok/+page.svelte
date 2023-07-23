<script lang="ts">
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { Button, Search, Span } from "flowbite-svelte";
  import type { VideoType } from "@store/types";
  import { youTubeURL } from "@store/data";
  import { loading } from "@components/loading";
  import { env } from "$env/dynamic/public";
  import Info from "@components/Info.svelte";
  import Description from "@components/Description.svelte";

  let video_info: VideoType;
  let urlInput = "";
  $: $youTubeURL;

  function handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    urlInput = inputElement.value;

    $youTubeURL = urlInput;
  }

  async function handleClick(event: Event) {
    if (urlInput === "") {
      alert("Please type youTube URL");
      return;
    }

    $loading = true;
    const response = await fetch(env.PUBLIC_API_INFO_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        url: urlInput,
      }),
    });
    video_info = await response.json();
    $youTubeURL = urlInput;
    urlInput = "";
    $loading = false;
  }
</script>

<section class="bg-base-200">
  <div class="lg:py-4 mx-auto max-w-screen-xl px-4">
    <h2
      class="mb-4 lg:mb-10 font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white lg: text-5xl"
    >
      <Span gradient>Download Video and Audio from TikTok</Span>
    </h2>
  </div>
</section>

<form class="flex sm:px-6 md:px-12 lg:px-12 py-2">
  <Search
    class="h-16 w-full"
    on:change={handleChange}
    placeholder="Please Type YouTube URL"
    value={urlInput}
  >
    <Button class="my-2 py-2" on:click={handleClick}>Search</Button>
  </Search>
</form>

{#if video_info}
  <Info {video_info} />
{/if}

<Description socialMedia="TikTok" />

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
