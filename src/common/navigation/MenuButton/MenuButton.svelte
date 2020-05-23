<script>
  import { menuStore } from "../../../stores";
  import { IconButton } from "../../../cdk";

  const { menuIsOpen, toggleMenu } = menuStore;
</script>

<IconButton
  class={$$props.class}
  name={$menuIsOpen ? 'arrow-left' : 'arrow-right'}
  on:click={() => toggleMenu()} />
