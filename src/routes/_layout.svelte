<script>
  import { Header } from "../components";
  import { menuStore } from "../stores";

  export let segment;

  const { menuIsOpen } = menuStore;
</script>

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

<div class="main-layout" class:menuOpen={$menuIsOpen}>
  <Header {segment} />
  <main>
    <slot />
  </main>
</div>
