<script>
  export let error;
  export let video_id;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="card-content">
  <div class="content">
    <button class="delete" />
    Error occured
    <p class="info">{error}</p>
  </div>
</div>
