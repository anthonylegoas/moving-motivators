<script>
  import Nav from "./Nav";
  import { menuStore } from "../../../stores";
  import { fly } from "svelte/transition";

  export let segment;

  const { menuIsOpen } = menuStore;
</script>

<style>
  header {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .header-content {
    padding: 0.5em 2em;
  }

  .logo {
    width: 60px;
    height: auto;
    margin: 1em 0;
  }

  h1 {
    font-size: 6rem;
    color: var(--primary-color);
    margin: 0;
  }

  p {
    color: var(--grey);
    margin: 1em 0;
  }
</style>

<header>
  {#if $menuIsOpen}
    <div
      class="header-content"
      in:fly={{ delay: 400, duration: 250, x: -100, y: 0 }}
      out:fly={{ delay: 0, duration: 100, x: -100, y: 0 }}>
      <a href=".">
        <img
          alt="Management 3.0 logo"
          class="logo"
          src="images/logo/m30-logo.png" />
      </a>
      <h1>Moving Motivators</h1>
      <p>
        Issu du Management 3.0, cet exercice permet aux personnes de réfléchir
        sur leurs motivations et comment les changements dans l'organisation de
        l'entreprise peuvent les affecter.
      </p>

      <Nav {segment} />
    </div>
  {/if}
</header>
