<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { page } from "$app/stores";
  import { global_selectedAudio } from "@store/data";
  import { loading } from "@components/loading";

  let params = $page.params.format;
  let resultFileURL: string;

  $: $global_selectedAudio;

  // https://api-video-xgnu4lf2ea-uc.a.run.app/download/audio?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgdZLi9oWNZg&filename=bts&to=mp3
  const fetchDownloadAudio = (async () => {
    $loading = true;
    try {
      const video_url = $global_selectedAudio.url;
      const filename = $global_selectedAudio.title;
      const to = params;
      const response = await fetch(
        `${env.PUBLIC_API_AUDIO_DOWNLOAD_URL}?url=${video_url}&filename=${filename}&to=${to}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Get Audio data failed.");
      }

      const blob = await response.blob();
      const file = new File([blob], `${filename}`, { type: blob.type });
      // console.log(file);
      resultFileURL = URL.createObjectURL(file);
    } catch (error) {
      console.error(error);
      alert(error);
    }
    $loading = false;
  })();
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

<div class="sm:px-6 md:px-12 lg:px-12 py-2 mt-6">
  <div class="sm:col md:flex md:gap-6 lg:gap-10">
    <a
      href={$global_selectedAudio.url}
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={$global_selectedAudio.thumbUrl}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {$global_selectedAudio.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {$global_selectedAudio.url}
        </p>
      </div>
    </a>
  </div>

  {#await fetchDownloadAudio then}
    <div>
      <a
        target="_blank"
        rel="noopener"
        href={resultFileURL}
        download={$global_selectedAudio.title}
      >
        <p class="text-sm sm:text-sm md:text-base lg:text-lg">Download</p>
      </a>
    </div>
  {/await}
</div>

<!-- Todo: table -->

<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
