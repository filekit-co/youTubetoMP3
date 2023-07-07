<script>
  import SearchInput from "@components/SearchInput.svelte";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { Button, Input, Label } from "flowbite-svelte";
  import { youTubeURL } from "@store/data";

  function handleChangeURL(event) {
    const url = event.target.value;
    youTubeURL.set(url);

    window.location.replace("/youtube");
  }
</script>

<!-- 사용자 url 입력하는 곳 -->
<!-- <SearchInput headText="YouYube URL" /> -->
<form class="py-12 px-12">
  <Label for="search" class="block mb-6 text-2xl">YouTube URL</Label>
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

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
