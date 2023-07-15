<script lang="ts">
  import { env } from "$env/dynamic/public";
  import VideoDetail from "./VideoDetail.svelte";
  import VideoError from "./VideoError.svelte";
  import VideoWaiting from "./VideoWaiting.svelte";
  import { loading } from "./loading";
  export let video_id: number;
  export let video_url: string;

  interface VideoType {
    title: string;
    thumbUrl: string;
    url: string;
    site: string;
  }

  // download request function
  // https://api-video-xgnu4lf2ea-uc.a.run.app/
  // https://api-video-xgnu4lf2ea-uc.a.run.app/info?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlOrU0MH0bMk

  const fetchInfo = (async () => {
    $loading = true;
    const response = await fetch(
      `${env.PUBLIC_API_URL}/info?url=${video_url}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    $loading = false;
    return await response.json();
  })();
</script>

{#await fetchInfo}
  <!-- <VideoWaiting /> -->
{:then data}
  <VideoDetail {data} {video_id} />
{:catch error}
  <VideoError {error} {video_id} />
{/await}
