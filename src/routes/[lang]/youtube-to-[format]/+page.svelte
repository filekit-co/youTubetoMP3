<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { page } from "$app/stores";
  import { youTubeURL, fileFormat } from "@store/data";
  import AudioTable from "@components/AudioTable.svelte";
  import VideoTable from "@components/VideoTable.svelte";
  import { goto } from "$app/navigation";
  import { beforeUpdate } from "svelte";
  import Description from "@components/Description.svelte";

  let params = $page.params.format;

  $: $fileFormat;
  $: $youTubeURL;

  beforeUpdate(() => {
    if (!$youTubeURL) {
      alert("Without URL. Please type youTube URL first.");
      goto("/youtube");
    }
  });
</script>

<section class="bg-base-200">
  <div class="lg:py-4 mx-auto max-w-screen-xl px-4">
    <h2
      class="flex justify-center mb-4 lg:mb-10 font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white lg: text-5xl"
    >
      YouTube to&nbsp;
      <p class="text-teal-200">{params}</p>
    </h2>
  </div>
</section>

{#if $youTubeURL}
  {#if $fileFormat === "audio"}
    <AudioTable fileType={params} />
  {:else}
    <VideoTable fileType={params} />
  {/if}
{/if}

<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

<Description socialMedia="YouTube" />

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
