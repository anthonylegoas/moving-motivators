<script>
  import { t as _ } from "svelte-intl-precompile";
  import { Page } from "../../lib/cdk";
  import { GitHubLink, MMHowToPlay } from "../../lib/components";
</script>

<svelte:head>
  <title>{$_("about.title")}</title>
</svelte:head>

<Page>
  <div class="about">
    <h1>{$_("about.title")}</h1>
    <h2>{$_("about.sections.0.title")}</h2>
    <p>
      {$_("about.sections.0.texts.0")}
      <a href="https://management30.com/learn/" rel="noreferrer" target="_blank">
        Management 3.0
      </a>
      {$_("about.sections.0.texts.1")}
    </p>
    <MMHowToPlay />
    <GitHubLink />
  </div>
</Page>

<style>
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    text-align: center;
  }
</style>
