<script lang="ts">
  import { FORMATS } from "@store/data";
  import { Card, Label, Select, GradientButton } from "flowbite-svelte";
  export let data;
  export let video_id: number;

  let selected = "best";
</script>

<div class="sm:px-6 md:px-12 lg:px-12 py-2 mt-6">
  <div class="sm:col-auto sm:gap-3 flex">
    <Card img={data.thumbUrl} href="/" horizontal>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {data.title}
      </h5>
      <p
        class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
      >
        {data.url}
        {data.site}
      </p>
    </Card>

    <Label class="sm:py-6 md:py-12 lg:py-12">
      <Select
        class="mb-3 w-full"
        placeholder="Format"
        items={FORMATS}
        bind:value={selected}
      />

      <GradientButton class="w-full" color="greenToBlue"
        >Download</GradientButton
      >
    </Label>
  </div>
</div>
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
