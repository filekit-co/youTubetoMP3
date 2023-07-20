<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
    Chevron,
  } from "flowbite-svelte";
  import logo from "$lib/assets/images/paper_folder.png";
  import { language, loadResource, switchLanguage } from "@inlang/sdk-js";
  import { languageCodes, languageTextMap, referenceLanguage } from "$lib/data";
  import type { LanguageCode } from "$lib/data";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  const getCountryFullName = (code: string) => {
    return languageTextMap[code as LanguageCode];
  };

  function handleClick(code: string) {
    switchLanguage(code);

    // findNewLangRoute
    const newRoute = findNewLangRoute(code, $page.url.pathname);
    goto(newRoute, { replaceState: false });
  }

  function findNewLangRoute(givenLang: LanguageCode, route: string) {
    const routeParts = route.split("/");

    if (languageCodes.includes(routeParts[1])) {
      // If language code exists in the route, replace it with givenLang
      routeParts[1] = givenLang;
    } else {
      routeParts.splice(1, 0, referenceLanguage);
    }
    return routeParts.join("/");
  }
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href={`/${language}`}>
    <img src={logo} class="w-10 h-10" alt="Filekit Logo" />
    <span
      class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white"
    >
      Filekit
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>

    <NavLi href={`/${language}/youtube`}>YouTube to MP3</NavLi>
    <NavLi href={`/${language}/tiktok`}>Tiktok to MP3</NavLi>
    <NavLi id="nav-menu1" class="cursor-pointer"
      ><Chevron aligned>Language</Chevron></NavLi
    >
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
      {#each Object.entries(languageTextMap) as [code, value]}
        <DropdownItem
          on:click={() => handleClick(code)}
          on:focus={() => loadResource(code)}
        >
          {getCountryFullName(code)}
        </DropdownItem>
      {/each}
    </Dropdown>
  </NavUl>
</Navbar>
