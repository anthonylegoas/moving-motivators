<script>
  import { IconButton } from "../../../../cdk";
  import MMMenuEntry from "../MMMenuEntry";

  export let disabled = false;
</script>

<MMMenuEntry {disabled}>
  <IconButton ariaLabel="Zoomer" name="zoom-in" on:click />
</MMMenuEntry>
