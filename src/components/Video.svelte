<script lang="ts">
  import { env } from "$env/dynamic/public";
  import { dummyData } from "@store/data";
  import VideoDetail from "./VideoDetail.svelte";
  import VideoError from "./VideoError.svelte";
  import VideoWaiting from "./VideoWaiting.svelte";
  export let video_id: number;
  export let video_url: string;

  interface VideoType {
    title: string;
    thumbUrl: string;
    url: string;
    site: string;
  }

  const data = {
    title: "BEENZINO - TRAIN(feat.C JAMM)",
    thumbUrl: "https://i.ytimg.com/vi/XwZpvOhEdOs/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=XwZpvOhEdOs",
    site: "youtube.com",
  };

  // download request function
  const fetchInfo = async () => {
    const response = await fetch(`${env.PUBLIC_API_URL}/api/info`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ url: video_url }),
    });

    return await response.json();
  };
</script>

<VideoDetail {data} {video_id} />

<!-- {#await fetchInfo}
  <VideoWaiting />
{:then data}
  <VideoDetail {data} {video_id} />
{:catch error}
  <VideoError {error} {video_id} />
{/await} -->
