<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { page } from "$app/stores";
  import { youTubeURL, fileFormat, global_selectedData } from "@store/data";
  import { loading } from "@components/loading";
  import AudioTable from "@components/AudioTable.svelte";
  import VideoTable from "@components/VideoTable.svelte";

  let params = $page.params.format;
  let resultFileURL: string;

  $: $fileFormat;
  $: $youTubeURL;

  // https://api-video-xgnu4lf2ea-uc.a.run.app/download/audio?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgdZLi9oWNZg&filename=bts&to=mp3
  const fetchDownloadAudio = async () => {
    console.log($global_selectedData);
    $loading = true;
    try {
      const audio_url = $global_selectedData.url;
      const filename = $global_selectedData.title;
      const to = params;
      const response = await fetch(
        `${env.PUBLIC_API_AUDIO_DOWNLOAD_URL}?url=${audio_url}&filename=${filename}&to=${to}`,
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!(await response.ok)) {
        throw new Error("Get Audio data failed.");
      }

      const blob = await response.blob();
      const file = new File([blob], `${filename}`, { type: blob.type });
      // console.log(file);
      resultFileURL = URL.createObjectURL(file);
      console.log(resultFileURL);
    } catch (error) {
      console.error(error);
    }
    $loading = false;
  };

  // https://api-video-xgnu4lf2ea-uc.a.run.app/download/video?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9VSerKr1vBM&filename=bonjovi&to=avi&height=150
  // https://api-video-xgnu4lf2ea-uc.a.run.app/download/video?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIGSjMoxVF1A&filename=ss&to=mp4

  const fetchDownloadVideo = async () => {
    $loading = true;
    try {
      const video_url = $global_selectedData.url;
      const filename = $global_selectedData.title;
      const to = params;
      const response = await fetch(
        `${env.PUBLIC_API_VIDEO_DOWNLOAD_URL}?url=${video_url}&filename=${filename}&to=${to}`,
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log(response);
      const blob = await response.blob();
      const file = new File([blob], `${filename}`, { type: blob.type });
      // console.log(file);
      resultFileURL = URL.createObjectURL(file);
    } catch (error) {
      console.error(error);
    }
    $loading = false;
  };
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

{#if $fileFormat === "audio"}
  <AudioTable fileType={params} />
{:else}
  <VideoTable fileType={params} />
{/if}

<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
