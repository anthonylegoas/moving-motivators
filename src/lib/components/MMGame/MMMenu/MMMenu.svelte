<script>
  import { MenuButton } from "../../navigation";
  import { menuStore } from "../../../stores";
  import MMMenuEntry from "./MMMenuEntry";
  import ToggleCardSwap from "./ToggleCardSwap";
  import ZoomIn from "./ZoomIn";
  import ZoomOut from "./ZoomOut";
  import ExportPNG from "./ExportPNG";

  const { menuIsOpen } = menuStore;
</script>

<style>
  .mm-menu {
    position: fixed;
    top: 35%;
    left: 1em;
    padding: 1em 0;
    border-radius: 4px;
    box-shadow: var(--game-shadow);
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 600px) {
    .mm-menu {
      top: unset;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-around;
      padding: 0.75em 0.5em;
    }
  }
</style>

<div class="mm-menu" class:with-app-menu={$menuIsOpen}>
  <MMMenuEntry>
    <MenuButton />
  </MMMenuEntry>
  <ToggleCardSwap />
  <ZoomIn />
  <ZoomOut />
  <ExportPNG/>
</div>
