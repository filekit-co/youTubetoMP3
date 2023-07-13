<script lang="ts">
  import { goto } from "$app/navigation";
  import { fileFormat, youTubeURL } from "@store/data";
  import { Label, Button, Select, Search } from "flowbite-svelte";
  import { FORMATS } from "$lib/store/data.js";

  let selected = "mp3";
  let userInput: string = "";

  function handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    userInput = inputElement.value;
  }

  function handleChangeURL(event: Event) {
    youTubeURL.set(userInput);
    fileFormat.set(selected);
    goto(`/youtube/to-${selected}`);
    userInput = "";
  }
</script>

<form class="flex gap-2 px-12 py-2">
  <Search
    class="h-16 w-full"
    on:change={handleChange}
    placeholder="Please Type YouTube URL"
    value={userInput}
  >
    <Label class="mr-4">
      <Select
        placeholder="Format"
        class="my-2 py-2"
        items={FORMATS}
        bind:value={selected}
      />
    </Label>

    <Button class="my-2 py-2" on:click={handleChangeURL}>Search</Button>
  </Search>
</form>
