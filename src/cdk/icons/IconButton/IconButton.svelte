<script>
  import Icon from "../Icon";

  export let ariaLabel;
  export let name;
  export let size = 20;
</script>

<style>
  .icon-button {
    border: none;
    background: transparent;
    outline: 0;
    cursor: pointer;
    color: inherit;
  }
</style>

<button aria-label={ariaLabel} class="icon-button {$$props.class}" on:click>
  <Icon {name} {size} />
</button>
