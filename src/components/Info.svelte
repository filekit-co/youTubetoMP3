<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    FORMATS,
    fileFormat,
    global_selectedData,
    youTubeURL,
  } from "@store/data";
  import type { VideoType } from "@store/types";
  import { Label, Select, GradientButton } from "flowbite-svelte";
  import { language } from "@inlang/sdk-js";
  import { i } from "@inlang/sdk-js";

  export let video_info: VideoType;

  $: $fileFormat;
  $: $global_selectedData;

  let selected = "mp3";

  // youtube, tiktok, twitter ...
  // List: https://github.com/yt-dlp/yt-dlp#extractor-arguments

  // 1. tiktok
  // https://www.tiktok.com/@txt.bighitent/video/7244933781281361154?is_from_webapp=1&sender_device=pc
  // 2. youtube
  // https://youtu.be/HIQ0dd7B_FU
  // https://www.youtube.com/watch?v=XwZpvOhEdOs
  // 3. twitter
  // https://twitter.com/newjeansroom/status/1682919896886419456?s=20
  // https://twitter.com/PassengersMovie/status/821025484150423557
  const getVendorByRegex = (origin: string) => {
    const fallbackVendor = "youtube";

    const regex = /\/\/(?:www\.)?([^.]+)\./;
    const result = regex.exec(origin);
    if (result && result.length > 1) {
      let vendor = result[1];
      if (vendor === "youtu") {
        vendor = "youtube";
      }
      return vendor;
    }
    return fallbackVendor;
  };

  function handleClick() {
    const vendor = getVendorByRegex($youTubeURL);

    const audioFormats = ["aac", "m4a", "mp3", "ogg", "wav"];

    audioFormats.includes(selected)
      ? ($fileFormat = "audio")
      : ($fileFormat = "video");
    $global_selectedData = video_info;

    goto(`/${language}/${vendor}-to-${selected}`);
  }
</script>

<div class="sm:px-6 md:px-12 py-2 mt-6">
  <div class="sm:col md:flex md:gap-6 lg:gap-10">
    <a
      href={video_info.url}
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={video_info.thumbUrl}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {video_info.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {video_info.url.substring(0, 25)}
        </p>
      </div>
    </a>

    <Label class="sm:py-6 md:py-12 lg:py-12">
      <Select
        class="mb-3 w-full"
        placeholder="Format"
        items={FORMATS}
        bind:value={selected}
      />

      <GradientButton on:click={handleClick} class="w-full" color="greenToBlue"
        >{i("Convert")}</GradientButton
      >
    </Label>
  </div>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
