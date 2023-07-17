<script lang="ts">
  import { Button, Search } from "flowbite-svelte";
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
    // $youTubeURL = urlInput;
    dispatch("handleUrl", urlInput);
    urlInput = "";
  }
</script>

<form class="flex sm:px-6 md:px-12 lg:px-12 py-2">
  <Search
    class="h-16 w-full"
    on:change={handleChange}
    placeholder="Please Type YouTube URL"
    value={urlInput}
  >
    <Button class="my-2 py-2" on:click={handleClick}>Search</Button>
  </Search>
</form>
