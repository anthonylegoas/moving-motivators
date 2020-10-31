<script>
  import { _, locale, locales } from "svelte-i18n";
  let selected = $locale;
</script>

<style>
  select {
    margin-left: 1rem;
    padding: 0.25rem 0.5rem;
    border-color: var(--primary-color);
    border-radius: 4px;
    color: var(--primary-color);
  }
</style>

<select
  aria-label="Language"
  bind:value={selected}
  on:change={() => ($locale = selected)}>
  {#each $locales as item}
    <option value={item}>{$_(`languages.${item}`)}</option>
  {/each}
</select>
