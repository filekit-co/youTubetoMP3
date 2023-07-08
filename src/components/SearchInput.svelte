<script lang="ts">
  import { youTubeURL } from "@store/data";
  import { Label, Button, Select, Search } from "flowbite-svelte";
  import { FORMATS } from "$lib/store/data.js";
  let selected = "mp4";

  let userInput: string = "";

  function handleChange(event) {
    userInput = event.target.value;
  }

  function handleChangeURL(event) {
    // console.log("typed url is = ", userInput);
    // console.log("clicked format is = ", selected);
    // let url = window.location.href;
    youTubeURL.set(userInput);
    window.location.replace(`/download/${selected}`);
  }
</script>

<form class="flex gap-2 px-12 py-2">
  <Search class="h-16" on:change={handleChange}>
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
