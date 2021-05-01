<script>
  import { onMount } from "svelte";
  import { Header } from "../components";
  import { menuStore } from "../stores";
  import { startClient } from "../i18n";

  export let segment;

  const { menuIsOpen } = menuStore;

  onMount(() => startClient());
</script>

<div class="main-layout" class:menuOpen={$menuIsOpen}>
  <Header {segment} />
  <main>
    <slot />
  </main>
</div>

<style>
  .main-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .main-layout :global(header) {
    height: 0;
    transition: height ease 0.3s;
  }

  .main-layout.menuOpen :global(header) {
    height: 6rem;
  }

  .main-layout main {
    padding: 5em 0;
    position: relative;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color-light);
    box-sizing: border-box;
    overflow-y: auto;
    transition: width ease 0.3s;
    box-shadow: inset var(--game-shadow);
  }
</style>
