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

  p {
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
  <h2>Comment jouer ?</h2>
  <ul>
    {#each steps as step}
      <li>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </li>
    {/each}
  </ul>
</div>
