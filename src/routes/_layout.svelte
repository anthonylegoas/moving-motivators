<script>
  import { Header } from "../common";
  import { menuStore } from "../stores";

  export let segment;

  const { menuIsOpen } = menuStore;
</script>

<style>
  .main-layout {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .main-layout :global(header) {
    left: 0;
    width: 0%;
    transition: width ease 0.3s;
  }

  .main-layout.menuOpen :global(header) {
    width: 35%;
  }

  .main-layout main {
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

  .main-layout.menuOpen main {
    width: 65%;
  }
</style>

<div class="main-layout" class:menuOpen={$menuIsOpen}>
  <Header {segment} />
  <main>
    <slot />
  </main>
</div>
