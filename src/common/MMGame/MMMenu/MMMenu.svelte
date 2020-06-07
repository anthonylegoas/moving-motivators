<script>
  import { MenuButton } from "../../navigation";
  import { menuStore } from "../../../stores";
  import MMMenuEntry from "./MMMenuEntry";
  import ToggleCardSwap from "./ToggleCardSwap";

  const { menuIsOpen } = menuStore;
</script>

<style>
  .mm-menu {
    position: fixed;
    top: 8em;
    left: 1em;
    padding: 1em 0;
    border-radius: 4px;
    box-shadow: var(--game-shadow);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  .mm-menu.with-app-menu {
    left: calc(35% + 1em);
  }
</style>

<div class="mm-menu" class:with-app-menu={$menuIsOpen}>
  <MMMenuEntry>
    <MenuButton />
  </MMMenuEntry>
  <ToggleCardSwap />
</div>
