<script lang="ts">
  import "../app.css";
  import Header from "@layouts/Header.svelte";
  import Navbar from "@layouts/Nav.svelte";
  import Footer from "@layouts/Footer.svelte";
  import { loading } from "@components/loading";
  import { navigating } from "$app/stores";
  import Loader from "@components/Loader.svelte";

  $: $loading = !!$navigating;
</script>

{#if $loading}
  <Loader />
{/if}

<Header />
<Navbar />
<slot />
<Footer />
