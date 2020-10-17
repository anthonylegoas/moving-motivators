<script>
  import { Page } from "../../cdk";
  import { MMHowToPlay } from "../../common";
</script>

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

<svelte:head>
  <title>Comment jouer ?</title>
</svelte:head>

<Page>
  <div class="about">
    <h1>À propos</h1>
    <h2>Qu'est-ce que c'est ?</h2>
    <p>
      Issu du
      <a href="https://management30.com/learn/" rel="noopener" target="_blank">
        Management 3.0
      </a>
      , cet exercice permet aux personnes de réfléchir sur leurs motivations et
      comment les changements dans l'organisation de l'entreprise peuvent les
      affecter.
    </p>
    <MMHowToPlay />
  </div>
</Page>
