<script>
  import Header from "../cdk/navigation/Header/Header.svelte";

  export let segment;
</script>

<style>
  .main-layout {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .main-layout :global(header) {
    width: 30%;
  }

  main {
    position: relative;
    width: 70%;
    min-height: 100%;
    height: auto;
    background-color: var(--primary-color-light);
    padding: 2em;
    box-sizing: border-box;
    overflow: auto;
  }
</style>

<div class="main-layout">
  <Header {segment} />
  <main>
    <slot />
  </main>
</div>
