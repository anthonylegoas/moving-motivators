<script>
  export let active = false;
</script>

<style>
  .mm-menu-entry {
    margin: 0;
    user-select: none;
    transition: all ease 0.2s;
  }
  .mm-menu-entry.active,
  .mm-menu-entry:hover {
    color: var(--primary-color);
    background: var(--primary-color-light);
  }

  .mm-menu-entry.active {
    box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.2);
  }
</style>

<div class="mm-menu-entry" class:active>
  <slot />
</div>
