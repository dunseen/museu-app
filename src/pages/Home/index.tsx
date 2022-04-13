import TagsSearch from "../../components/Autocomplete";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useContent } from "../../hooks/useContent";

import Card1 from "../../components/Card1";
import Card2 from "../../components/Card2";
import Card3 from "../../components/Card3";
import SpecieCard from "../../components/SpecieCard/SpecieCard";

import "./home.style.scss";
import { useMainContext } from "../../context/MainContext";

function Home() {
  const content = useContent();
  const { activeSection, handleActiveSection } = useActiveSection();
  const { shouldRenderList } = useMainContext();

  return (
    <div className="home-container">
      <section className="image-section">
        <header>
          <ul>
            <li onClick={() => handleActiveSection("informative")}>Início</li>

            <li onClick={() => handleActiveSection("search")}>Busca</li>

            <li>Contato</li>
          </ul>
        </header>
      </section>

      {activeSection === "search" ? (
        <>
          <section id="search" className="search-section">
            <TagsSearch />
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "40px 0",
                flexWrap: "wrap",
                minHeight: 408,
              }}
            >
              <Card1 />
              <Card2 />
              <Card3 />
            </div>
          </section>

          {shouldRenderList && (
            <section
              id="list-result"
              style={{
                padding: "40px 72px",
                width: "100%",
                maxWidth: 1440,
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  borderBottom: "4px solid green",
                  marginBottom: "40px",
                }}
              >
                <h3 style={{ fontSize: "28px", fontWeight: "normal" }}>
                  Resultado
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,280px)",
                  placeContent: "center",
                  placeItems: "center",

                  gap: 24,
                }}
              >
                <SpecieCard />
                <SpecieCard />
                <SpecieCard />
                <SpecieCard />
                <SpecieCard />
                <SpecieCard />
                <SpecieCard />
                <SpecieCard />
              </div>
            </section>
          )}
        </>
      ) : (
        <section id="informative" className="informative-section">
          {content.map((item) => (
            <Card
              key={item.title}
              iconURL={item.iconURL}
              imageAlt={item.imageAlt}
              content={item.content}
              title={item.title}
            />
          ))}
        </section>
      )}

      <Footer />
    </div>
  );
}

export { Home };
