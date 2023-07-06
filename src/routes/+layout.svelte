<script lang="ts">
  import "../app.css";
  import Navbar from "@layouts/Nav.svelte";
  import Footer from "@layouts/Footer.svelte";
</script>

<!-- Header -->
<Navbar />
<slot />
<Footer />
