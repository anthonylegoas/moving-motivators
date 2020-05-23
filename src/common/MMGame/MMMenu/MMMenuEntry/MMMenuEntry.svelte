<style>
  .mm-menu-entry {
    margin: 0.5em 0;
    user-select: none;
    transition: all ease 0.2s;
  }

  .mm-menu-entry:hover {
    color: var(--primary-color);
    background: var(--primary-color-light);
  }
</style>

<div class="mm-menu-entry">
  <slot />
</div>
