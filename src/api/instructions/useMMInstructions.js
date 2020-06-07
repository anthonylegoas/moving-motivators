/**
 * Allow to retrieve Moving Motivators instructions.
 */
const useMMInstructions = () => {
  const steps = [
    {
      title: `Définissez les motivateurs qui sont importants pour vous.`,
      text: `Placez les cartes selon leur ordre d'importance de gauche (moins important) à droite (plus important).`,
    },
    {
      title: `Discutez de la façon dont le changement affecte vos motivateurs.`,
      text: `
      Par exemple: si vous vous demandez si vous devez changer d’emploi, ce qui signifierait déménager dans une autre ville,
      apprendre une nouvelle compétence et vous faire de nouveaux amis,
      comment cela affecte-t-il ce qui vous motive?
      Cela augmentera très probablement certains facteurs de motivation et en diminuera d’autres. 
      Déplacez les cartes vers le haut pour un changement positif et vers le bas pour un changement négatif,
      puis regardez si vous avez plus de cartes vers le haut ou vers le bas.
      C'est un excellent moyen d'aider à prendre des décisions.`,
    },
    {
      title: `Temps de réflexion et de discussion.`,
      text: `
      Discutez avec vos coéquipiers des motivations les moins importantes et les plus importantes pour eux.
      Cela vous donnera un meilleur aperçu de ce qui motive vos collègues et vous permettra de créer des relations plus solides et d'augmenter la collaboration.
      Utilisez-le également comme un outil pour réfléchir et évaluer vos propres décisions de vie.
      Lorsque la plupart de vos motivations importantes diminuent ou que les moins importantes augmentent, il est peut-être temps de réfléchir.`,
    },
  ];

  return { steps };
};

export default useMMInstructions;
