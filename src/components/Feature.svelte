<script lang="ts">
  import { page } from "$app/stores";
  import type { FeatureProps, UpdateFeatureProps } from "@store/types";
  import { onMount } from "svelte";
  import {
    RotateOutline,
    HeartOutline,
    LockOutline,
    MobilePhoneOutline,
    RocketOutline,
    CloseCircleSolid,
  } from "flowbite-svelte-icons";
  import { i } from "@inlang/sdk-js";

  export let bgColor: string = "";

  const defaultFeatureProps: FeatureProps = {
    head1: i("The best TikTok to MP3 Converter & Downloader"),
    head2: i(
      "Download MP3 files from TikTok videos and save them on your computer"
    ),
    description: i("The faster TikTok to MP3 video downloader ever created!"),
    subHead: [
      i("Fast TikTok to MP3 conversion"),
      i("Free video downloader"),
      i("Download TikTok videos without software"),
      i("Select a TikTok video"),
      i("Paste the TikTok URL link"),
      i("Download TikTok video to MP3"),
    ],
    subImage: [
      RotateOutline,
      HeartOutline,
      RocketOutline,
      CloseCircleSolid,
      LockOutline,
      MobilePhoneOutline,
    ],
    subDescription: [
      i(
        "Filekit.co is by far the fastest online video converter in the world."
      ),
      i(
        "This TikTok to MP3 video downloader is free for everyone and forever."
      ),
      i(
        "You can convert a TikTok video to MP3 anonymously, we are not collecting your personal data."
      ),
      i(
        "Visit TikTok website, find and play the video you want to download and copy it's URL link."
      ),
      i(
        "Paste the TikTok video URL link in the above search field to start MP3 conversion."
      ),
      i("Click the save button to download the TikTok video in MP3"),
    ],
  };

  const featureProps: UpdateFeatureProps = $page.data?.featureProps || {};

  const features = { ...defaultFeatureProps, ...featureProps };

  let renderedDivs: any[] = [];

  onMount(() => {
    renderedDivs = features.subHead.map((subHead, index) => {
      const subDescription = features.subDescription[index];
      const subImage = features.subImage[index];
      return { subHead, subImage, subDescription };
    });
  });
</script>

<section class={bgColor}>
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class=" mb-8 lg:mb-16">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold">
        {features.head1}
      </h2>

      <h2 class="mb-4 text-2xl underline tracking-tight">
        "{features.head2}"
      </h2>

      <p class="italic sm:text-xl">
        {features.description}
      </p>
    </div>
    <div
      class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
    >
      {#each renderedDivs as { subHead, subImage, subDescription }}
        <div>
          <div class="flex justify-center items-center mb-4 h-10 rounded-ful">
            <svelte:component this={subImage} size={50} />
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-black">
            {subHead}
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            {subDescription}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
