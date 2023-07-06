<script>
  import { Label, Input, Button } from "flowbite-svelte";
</script>

<form class="py-12 px-12">
  <Label for="search" class="block mb-6 text-2xl">YouTube URL</Label>
  <Input id="search" placeholder="Search" size="lg">
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
