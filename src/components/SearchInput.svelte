<script lang="ts">
  import { Label, Input, Button } from "flowbite-svelte";
  import Download from "./Download.svelte";
  export let headText: String;

  let videoURL: string = "";

  function handleChangeURL(event) {
    videoURL = event.target.value;
  }

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

  const dummyAudio = [{ tag: "MP3 - 128kbps", data: "16.7MB" }];

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
</script>

<form class="py-12 px-12">
  <Label for="search" class="block mb-6 text-2xl">{headText}</Label>
  <Input id="search" placeholder="Search" size="lg" on:change={handleChangeURL}>
    <svg
      slot="left"
      aria-hidden="true"
      class="w-6 h-6 text-gray-500 dark:text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      /></svg
    >
    <Button slot="right" size="sm" type="submit">Search</Button>
  </Input>
</form>

{#if videoURL !== ""}
  <Download {dummyVideo} {dummyAudio} {dummyData} />
{/if}
