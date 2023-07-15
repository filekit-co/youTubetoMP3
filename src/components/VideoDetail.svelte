<script lang="ts">
  import { goto } from "$app/navigation";
  import { FORMATS, global_selectedAudio } from "@store/data";
  import { Label, Select, GradientButton } from "flowbite-svelte";

  export let data;
  export let video_id: number;

  $: $global_selectedAudio;

  let selected = "best";

  function handleClick() {
    $global_selectedAudio = data;

    goto(`youtube-to-${selected}`);
  }
</script>

<div class="sm:px-6 md:px-12 lg:px-12 py-2 mt-6">
  <div class="sm:col md:flex md:gap-6 lg:gap-10">
    <a
      href={data.url}
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={data.thumbUrl}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {data.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.url}
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
        >Convert</GradientButton
      >
    </Label>
  </div>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
