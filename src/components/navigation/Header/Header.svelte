<script>
  import Nav from "./Nav";
  import { LanguageSelector } from "../../LanguageSelector";
  import { menuStore } from "../../../stores";
  import { fade, fly } from "svelte/transition";

  export let segment;

  const { menuIsOpen } = menuStore;
</script>

<style>
  header {
    position: relative;
    width: calc(100% - 4em);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .title {
    display: flex;
    align-items: flex-end;
  }

  .header-content {
    width: 100%;
    padding: 0.5em 2em;
  }

  .first-line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 40px;
    height: auto;
    margin: 1em 1em 1em 0;
  }

  p.app-name {
    font-family: "KapraNeue-Regular";
    font-size: 2.5rem;
    color: var(--primary-color);
    font-weight: 400;
    line-height: 1.2;
  }

  p {
    color: var(--grey);
    font-size: 0.875rem;
    margin: 0.25em 0;
  }

  .end-of-line {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    .app-name {
      display: none;
    }
  }
</style>

<header>
  {#if $menuIsOpen}
    <div
      class="header-content"
      in:fade={{ delay: 200, duration: 250 }}
      out:fly={{ delay: 0, duration: 100, x: 0, y: -100 }}>
      <div class="first-line">
        <div class="title">
          <a href=".">
            <img
              alt="Management 3.0 logo"
              class="logo"
              src="images/logo/m30-logo.png" />
          </a>
          <p class="app-name">Moving Motivators</p>
        </div>
        <div class="end-of-line">
          <Nav {segment} />
          <LanguageSelector />
        </div>
      </div>
    </div>
  {/if}
</header>
