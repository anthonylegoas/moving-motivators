<script>
  import { IconButton } from "../../../../cdk";
  import MMMenuEntry from "../MMMenuEntry";

  export let swapIsActive;
</script>

<MMMenuEntry active={swapIsActive}>
  <IconButton ariaLabel="Toggle cards swapping" name="swap" on:click />
</MMMenuEntry>
