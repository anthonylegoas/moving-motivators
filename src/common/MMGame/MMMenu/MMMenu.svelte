<script>
  import { MenuButton } from "../../navigation";
  import MMMenuEntry from "./MMMenuEntry";
  import ToggleCardSwap from "./ToggleCardSwap";
</script>

<style>
  .mm-menu {
    position: absolute;
    top: 8em;
    left: 1em;
    padding: 1em 0;
    border-radius: 4px;
    box-shadow: var(--game-shadow);
    background-color: #fff;
  }
</style>

<div class="mm-menu">
  <MMMenuEntry>
    <MenuButton />
  </MMMenuEntry>
  <ToggleCardSwap />
</div>
