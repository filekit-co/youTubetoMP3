<script lang="ts">
  import { goto } from "$app/navigation";
  import { fileFormat, youTubeURL } from "@store/data";
  import { Label, Button, Select, Search, NavHamburger } from "flowbite-svelte";
  import { FORMATS } from "$lib/store/data.js";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let urlInput: string = "";
  let urlRegex = new RegExp(/^(https?):\/\/[^\s$.?#].[^\s]*$/);
  let videos = [];

  function handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    urlInput = inputElement.value;
  }

  function handleClick(event: Event) {
    // console.log("inputed value is: ", urlInput);
    dispatch("handleUrl", urlInput);
    urlInput = "";
    // youTubeURL.set(urlInput);
    // fileFormat.set(selected);
    // goto(`/youtube/to-${selected}`);
    // urlInput = "";
  }
</script>

<form class="flex sm:px-6 md:px-12 lg:px-12 py-2">
  <Search
    class="h-16 w-full"
    on:change={handleChange}
    placeholder="Please Type YouTube URL"
    value={urlInput}
  >
    <!-- <Label class="sm:mr-0 md:mr-2 lg:mr-2">
      <Select
        placeholder="Format"
        class="my-2 py-2"
        items={FORMATS}
        bind:value={selected}
      />
    </Label> -->

    <Button class="my-2 py-2" on:click={handleClick}>Search</Button>
  </Search>
</form>
