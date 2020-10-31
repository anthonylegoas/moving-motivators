<script>
  import { _ } from "svelte-i18n";
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
    margin-top: 0.5em;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="mm-how-to-play">
  <h2>{$_('about.sections.1.title')}</h2>
  <ul>
    <li>
      <h3>{$_('about.sections.1.steps.0.title')}</h3>
      <p>{$_('about.sections.1.steps.0.text')}</p>
    </li>
    <li>
      <h3>{$_('about.sections.1.steps.1.title')}</h3>
      <p>{$_('about.sections.1.steps.1.text')}</p>
    </li>
    <li>
      <h3>{$_('about.sections.1.steps.2.title')}</h3>
      <p>{$_('about.sections.1.steps.2.text')}</p>
    </li>
  </ul>
</div>
