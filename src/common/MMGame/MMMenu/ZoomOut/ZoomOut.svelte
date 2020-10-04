<script>
  import { IconButton } from "../../../../cdk";
  import MMMenuEntry from "../MMMenuEntry";

  export let disabled = false;
</script>

<MMMenuEntry {disabled}>
  <IconButton ariaLabel="Dézoomer" name="zoom-out" on:click />
</MMMenuEntry>
