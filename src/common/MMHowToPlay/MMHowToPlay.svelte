<script>
  export let steps;
</script>

<style>
  .mm-how-to-play {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3.5rem;
    color: var(--primary-color);
    margin: 0.5em 0;
  }

  h2 {
    color: var(--primary-color);
    font-size: 2.25rem;
    padding-bottom: 0.25em;
  }

  h2::after {
    background-color: var(--tertiary-color);
    content: "";
    display: block;
    height: 4px;
    margin: 1rem auto 0;
    width: 5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0.5em 2em;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0 2em;
  }

  ul > li + li {
    margin-top: 4em;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="mm-how-to-play">
  <h1>Comment jouer ?</h1>
  <ul>
    {#each steps as step}
      <li>
        <h2>{step.title}</h2>
        <p>{step.text}</p>
      </li>
    {/each}
  </ul>
</div>
