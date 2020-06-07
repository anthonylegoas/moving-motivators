<script>
  import { menuStore } from "../../../stores";
  import { IconButton } from "../../../cdk";

  const { menuIsOpen, toggleMenu } = menuStore;
</script>

<IconButton
  ariaLabel={$menuIsOpen ? 'Cacher le menu' : 'Ouvrir le menu'}
  class={$$props.class}
  name={$menuIsOpen ? 'maximize' : 'menu'}
  on:click={() => toggleMenu()} />
