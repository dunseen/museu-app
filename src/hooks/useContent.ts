import { useEffect, useState } from "react";

import iconAbelha from "../assets/iconAbelha.png";
import iconBorboleta from "../assets/iconBorboleta.png";
import iconFormiga from "../assets/iconFormiga.png";
import { IContent } from "../interfaces/IContent";

const fakeConfig = [
  {
    title: "Insetos",
    imageAlt: "icon-abelha",
    iconURL: iconAbelha,
    content: `Você acha que os insetos não são importantes e que só atrapalham?
    Consegue imaginar nosso planeta 15% mais leve e com a metade dos
    seres vivos existentes? Pois é, os insetos, aparentemente tão
    insignificantes, representam mais da metade da vida do planeta e,
    somente as formigas, 15% de seu peso! É melhor conhecermos um
    pouco mais sobre esses animais, não é mesmo? Mas, que tal de uma
    forma diferente? Já imaginou um zoológico de insetos? Nunca
    imaginou? Pois nós fizemos um e disponibilizamos isso para você!`,
  },

  {
    title: "Planeta inseto",
    imageAlt: "icon-borboleta",
    iconURL: iconBorboleta,
    content: `Você acha que os insetos não são importantes e que só atrapalham?
    Consegue imaginar nosso planeta 15% mais leve e com a metade dos
    seres vivos existentes? Pois é, os insetos, aparentemente tão
    insignificantes, representam mais da metade da vida do planeta e,
    somente as formigas, 15% de seu peso! É melhor conhecermos um
    pouco mais sobre esses animais, não é mesmo? Mas, que tal de uma
    forma diferente? Já imaginou um zoológico de insetos? Nunca
    imaginou? Pois nós fizemos um e disponibilizamos isso para você!`,
  },
  {
    title: "Atividades lúdicas",
    imageAlt: "icon-formiga",
    iconURL: iconFormiga,
    content: `Você acha que os insetos não são importantes e que só atrapalham?
    Consegue imaginar nosso planeta 15% mais leve e com a metade dos
    seres vivos existentes? Pois é, os insetos, aparentemente tão
    insignificantes, representam mais da metade da vida do planeta e,
    somente as formigas, 15% de seu peso! É melhor conhecermos um
    pouco mais sobre esses animais, não é mesmo? Mas, que tal de uma
    forma diferente? Já imaginou um zoológico de insetos? Nunca
    imaginou? Pois nós fizemos um e disponibilizamos isso para você!`,
  },
];

export function useContent() {
  const [content, setContent] = useState<IContent[]>([]);

  //TODO get content from STRAPI;
  useEffect(() => {
    setContent(fakeConfig);
  }, []);
  return content;
}
