<script>
  import SidePanel from "$comp/Side-Panel.svelte";
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<main>
  <SidePanel />
  <slot />
</main>

<style>
  main {
    display: flex;
    margin-block: 2rem;
  }
</style>
