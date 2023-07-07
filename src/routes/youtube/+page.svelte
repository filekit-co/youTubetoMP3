<script lang="ts">
  import SearchInput from "@components/SearchInput.svelte";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import Download from "@components/Download.svelte";

  const dummyVideo = [
    { tag: "MP4 auto quility", data: "MB" },
    { tag: "1080p(.mp4)", data: "212.3MB" },
    { tag: "720p(.mp4)", data: "83.9MB" },
    { tag: "480p(.mp4)", data: "55.4MB" },
    { tag: "360p(.mp4)", data: "MB" },
    { tag: "240p(.mp4)", data: "28.4MB" },
    { tag: "144p(.mp4)", data: "22.3MB" },
    { tag: "144p(.3gp)", data: "MB" },
  ];

  const dummyData: Object[] = [
    {
      key: "Video",
      value: [
        { tag: "MP4 auto quility", data: "MB" },
        { tag: "1080p(.mp4)", data: "212.3MB" },
        { tag: "720p(.mp4)", data: "83.9MB" },
        { tag: "480p(.mp4)", data: "55.4MB" },
        { tag: "360p(.mp4)", data: "MB" },
        { tag: "240p(.mp4)", data: "28.4MB" },
        { tag: "144p(.mp4)", data: "22.3MB" },
        { tag: "144p(.3gp)", data: "MB" },
      ],
    },
    {
      key: "Audio",
      value: [{ tag: "MP3 - 128kbps", data: "16.7MB" }],
    },
  ];

  const dummyAudio = [{ tag: "MP3 - 128kbps", data: "16.7MB" }];
</script>

<!-- 사용자 url 입력하는 곳 -->
<SearchInput headText="YouTube convert to MP3" />

{#if url !== ""}
  <Download {dummyAudio} {dummyData} {dummyVideo} />
{/if}

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
