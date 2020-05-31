<script>
  import MMHowToPlay from "./MMHowToPlay.svelte";
  import { useMMInstructions } from "../../api";

  const { steps } = useMMInstructions();
</script>

<MMHowToPlay {steps} />
