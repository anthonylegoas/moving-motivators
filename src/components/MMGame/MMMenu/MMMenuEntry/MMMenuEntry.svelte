<script>
  export let active = false,
    disabled = false;
</script>

<style>
  .mm-menu-entry {
    display: flex;
    margin: 0;
    user-select: none;
    transition: all ease 0.2s;
    border: 1px solid transparent;
  }
  .mm-menu-entry.active,
  .mm-menu-entry:hover {
    color: var(--primary-color);
    background: var(--primary-color-light);
  }

  .mm-menu-entry.active {
    border: 1px solid var(--primary-color);
  }

  .mm-menu-entry.disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>

<div class="mm-menu-entry" class:active class:disabled>
  <slot />
</div>
