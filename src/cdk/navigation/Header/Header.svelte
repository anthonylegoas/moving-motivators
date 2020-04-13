<script>
  import Nav from "../Nav/Nav.svelte";

  export let segment;
</script>

<style>
  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5em 4em;
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
  <a href=".">
    <img
      alt="Management 3.0 logo"
      class="logo"
      src="images/logo/m30-logo.png" />
  </a>
  <h1>Moving Motivators</h1>
  <p>
    Issu du Management 3.0, cet exercice permet aux personnes de réfléchir sur
    leurs motivations et comment les changements dans l'organisation de
    l'entreprise peuvent les affecter.
  </p>

  <Nav {segment} />
</header>
