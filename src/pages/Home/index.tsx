import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import iconAbelha from "../../assets/iconAbelha.png";
import iconBorboleta from "../../assets/iconBorboleta.png";
import iconFormiga from "../../assets/iconFormiga.png";

import "./home.style.scss";

function Home() {
  return (
    <div className="home-container">
      <section className="image-section">
        <header>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Busca</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </header>
      </section>
      <section className="informative-section">
        <div>
          <img src={iconAbelha} alt="icon-abelha" />
          <h1>Insetos</h1>
          <p>
            Você acha que os insetos não são importantes e que só atrapalham?
            Consegue imaginar nosso planeta 15% mais leve e com a metade dos
            seres vivos existentes? Pois é, os insetos, aparentemente tão
            insignificantes, representam mais da metade da vida do planeta e,
            somente as formigas, 15% de seu peso! É melhor conhecermos um pouco
            mais sobre esses animais, não é mesmo? Mas, que tal de uma forma
            diferente? Já imaginou um zoológico de insetos? Nunca imaginou? Pois
            nós fizemos um e disponibilizamos isso para você!
          </p>
        </div>

        <div>
          <img src={iconBorboleta} alt="icon-borboleta" />
          <h1>Planeta inseto</h1>
          <p>
            Você acha que os insetos não são importantes e que só atrapalham?
            Consegue imaginar nosso planeta 15% mais leve e com a metade dos
            seres vivos existentes? Pois é, os insetos, aparentemente tão
            insignificantes, representam mais da metade da vida do planeta e,
            somente as formigas, 15% de seu peso! É melhor conhecermos um pouco
            mais sobre esses animais, não é mesmo? Mas, que tal de uma forma
            diferente? Já imaginou um zoológico de insetos? Nunca imaginou? Pois
            nós fizemos um e disponibilizamos isso para você!
          </p>
        </div>

        <div>
          <img src={iconFormiga} alt="icon-formiga" />
          <h1>Atividades lúdicas</h1>
          <p>
            Você acha que os insetos não são importantes e que só atrapalham?
            Consegue imaginar nosso planeta 15% mais leve e com a metade dos
            seres vivos existentes? Pois é, os insetos, aparentemente tão
            insignificantes, representam mais da metade da vida do planeta e,
            somente as formigas, 15% de seu peso! É melhor conhecermos um pouco
            mais sobre esses animais, não é mesmo? Mas, que tal de uma forma
            diferente? Já imaginou um zoológico de insetos? Nunca imaginou? Pois
            nós fizemos um e disponibilizamos isso para você!
          </p>
        </div>
      </section>
      <footer className="footer">
        <ul>
          <li>
            <a
              href="https://pt-br.facebook.com/UFRAOficial/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsFacebook size={"25"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ufraoficial/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsInstagram size={"25"} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/UfraOficial?s=20&t=ycti-n6SFrQY7x5sXd8ipg"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsTwitter size={"25"} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export { Home };
