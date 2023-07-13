<script>
  import SearchInput from "@components/SearchInput.svelte";
  import Banner from "@components/Banner.svelte";
  import Feature from "@components/Feature.svelte";
  import { youTubeURL, fileFormat } from "@store/data";
  import Download from "@components/Download.svelte";
</script>

<section class="bg-base-200">
  <div class="lg:py-4 mx-auto max-w-screen-xl px-4">
    <h2
      class="flex justify-center mb-4 lg:mb-10 font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white lg: text-5xl"
    >
      YouTube to&nbsp;
      <p class="text-teal-200">{$fileFormat.toUpperCase()}</p>
    </h2>
  </div>
</section>

<!-- 사용자 url 입력하는 곳 -->
<!-- <SearchInput headText="YouYube URL" /> -->
<SearchInput />

{#if $youTubeURL}
  {$youTubeURL}
  <Download />
{/if}

<!-- 회사 및 광고 -->
<Banner />

<!-- Feature: 사이트 특징 기존 feature 컴포넌트 활용 -->
<Feature />
