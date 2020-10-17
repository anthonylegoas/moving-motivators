<script>
  import Icon from "../Icon";

  export let href,
    target = "_blank";
  export let name,
    size = 20;
</script>

<style>
  .icon-link {
    border: none;
    background: transparent;
    outline: 0;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.1s;
  }

  .icon-link:hover {
    color: var(--primary-color);
  }
</style>

<a class="icon-link" {href} rel="noopener" {target}>
  <Icon {name} {size} />
  <slot />
</a>
