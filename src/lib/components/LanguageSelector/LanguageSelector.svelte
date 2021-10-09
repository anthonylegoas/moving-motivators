<script>
  import { t as _, locale, locales } from "svelte-intl-precompile";
  let selected = $locale;
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select
  aria-label="Language"
  bind:value={selected}
  on:change={() => ($locale = selected)}
>
  {#each $locales as item}
    <option value={item}>{$_(`languages.${item}`)}</option>
  {/each}
</select>

<style>
  select {
    margin-left: 1rem;
    padding: 0.25rem 0.5rem;
    border-color: var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
  }
</style>
