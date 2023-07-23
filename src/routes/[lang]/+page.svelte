<script lang="ts">
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { Button, Search } from "flowbite-svelte";
  import type { VideoType } from "@store/types";
  import { youTubeURL } from "@store/data";
  import { loading } from "@components/loading";
  import { env } from "$env/dynamic/public";
  import Info from "@components/Info.svelte";
  import Description from "@components/Description.svelte";
  import { i } from "@inlang/sdk-js";

  let video_info: VideoType;
  let urlInput = "";
  $: $youTubeURL;

  function handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    urlInput = inputElement.value;

    $youTubeURL = urlInput;
  }

  const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(env.PUBLIC_API_INFO_URL, {
      method: "POST",
      body: JSON.stringify({
        url,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    return await response.json();
  };

  const validateInput = (input: string): boolean => {
    if (!input) {
      alert(i("Please type YouTube URL first!"));
      return false;
    }
    return true;
  };

  async function handleClick(event: Event) {
    if (!validateInput(urlInput)) {
      return;
    }
    try {
      $loading = true;
      video_info = await fetchData(urlInput);
      $youTubeURL = urlInput;
    } finally {
      urlInput = "";
      $loading = false;
    }
  }
</script>

<section class="bg-base-200 pt-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <h2
      class="text-2xl lg:text-4xl font-black text-center text-gray-900 dark:text-white"
    >
      {i("Download Video or Audio for free")}
    </h2>
  </div>
</section>

<form class="px-10 md:px-25 lg:px-48 pt-8">
  <Search
    class="h-14"
    on:change={handleChange}
    placeholder={i("Type URL...")}
    value={urlInput}
  >
    <Button size="md" color="red" on:click={handleClick}>{i("Search")}</Button>
  </Search>
</form>

{#if video_info}
  <Info {video_info} />
{/if}

<Description socialMedia="YouTube" />

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
