<script>
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
  import { language } from "@inlang/sdk-js";
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
      <DropdownItem>English</DropdownItem>
      <DropdownItem>Korean</DropdownItem>
      <DropdownItem>Japanese</DropdownItem>
      <DropdownItem>Indian</DropdownItem>
      <DropdownItem>Vietnam</DropdownItem>
    </Dropdown>
  </NavUl>
</Navbar>
