<script>
  import { menuStore } from "../../../stores";
  import { IconButton } from "../../../cdk";

  const { menuIsOpen, toggleMenu } = menuStore;
</script>

<IconButton
  class={$$props.class}
  name={$menuIsOpen ? 'maximize' : 'menu'}
  on:click={() => toggleMenu()} />
