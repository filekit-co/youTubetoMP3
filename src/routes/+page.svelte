<script lang="ts">
  import SearchInput from "@components/SearchInput.svelte";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { Span } from "flowbite-svelte";
  import type { VideoType } from "@store/types";
  import Video from "@components/Video.svelte";

  let videos: VideoType[] = [];
  let video_id = 0;

  function handleUrl(url) {
    // console.log("Inputed data is: ", url.detail);
    const data = {
      id: ++video_id,
      url: url.detail,
    };

    videos = [...videos, data];
    // console.log(videos);
  }
</script>

<section class="bg-base-200">
  <div class="lg:py-4 mx-auto max-w-screen-xl px-4">
    <h2
      class="mb-4 lg:mb-10 font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white lg: text-5xl"
    >
      <Span gradient>Download Video and Audio from YouTube</Span>
    </h2>
  </div>
</section>

<!-- 사용자 url 입력하는 곳 -->
<!-- <SearchInput headText="YouYube URL" /> -->
<SearchInput on:handleUrl={handleUrl} />

{#each videos as video (video.id)}
  <div>
    <Video video_id={video.id} video_url={video.url} />
  </div>
{/each}

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
