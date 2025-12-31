import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

type ContentItem = {
  id: string;
  title: string;
  text: string;
  premium: boolean;
};

const contents: ContentItem[] = [
  {
    id: "ansiedade",
    title: "Ansiedade",
    text: "A ansiedade é uma resposta natural do corpo. Aqui você aprende estratégias iniciais para lidar melhor com ela no dia a dia.",
    premium: false,
  },
  {
    id: "alimentacao",
    title: "Alimentação Saudável",
    text: "Pequenas mudanças alimentares podem gerar grandes impactos no bem-estar físico e emocional.",
    premium: false,
  },
  {
    id: "controle-ansiedade",
    title: "Controle da Ansiedade",
    text: "Conteúdo avançado com técnicas clínicas, exercícios guiados e reflexões profundas.",
    premium: true,
  },
];

export function Content() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const content = contents.find((item) => item.id === id);

  // ❌ CONTEÚDO NÃO ENCONTRADO
  if (!content) {
    return (
      <>
        <Header />
        <main className="container">
          <h1>Conteúdo não encontrado</h1>
          <button className="cta" onClick={() => navigate("/")}>
            Voltar ao início
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="container fade-in">
        <h1 className="content-title">{content.title}</h1>

        <p className="content-subtitle">
          Material educativo elaborado por psicólogos e nutricionistas
        </p>

        {/* AVISO LEGAL */}
        <p
          style={{
            marginTop: 24,
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          Este material é apenas para leitura dentro da plataforma.
          Não substitui acompanhamento psicológico ou nutricional.
        </p>

        {/* CONTEÚDO GRATUITO */}
        {!content.premium && (
          <>
            <div style={{ marginTop: 32 }}>
              <p className="content-text">{content.text}</p>
            </div>

            <div style={{ marginTop: 40 }}>
              <p className="content-text">
                Gostou deste material? Existem conteúdos mais aprofundados
                desenvolvidos por profissionais da saúde.
              </p>

              <button
                className="secondary cta"
                onClick={() => navigate("/")}
              >
                Ver outros materiais
              </button>
            </div>

            <button
              className="cta"
              style={{ marginTop: 32 }}
              onClick={() => navigate(-1)}
            >
              ← Voltar
            </button>
          </>
        )}

        {/* CONTEÚDO PREMIUM (DEGUSTAÇÃO + BLOQUEIO) */}
        {content.premium && (
          <>
            <div style={{ marginTop: 32 }}>
              <p className="content-text">
                {content.text}
              </p>
            </div>

            <div className="content-blur" style={{ marginTop: 24 }}>
              <p className="content-text">
                Continuação do conteúdo disponível apenas para assinantes.
                Técnicas, exercícios e orientações completas.
              </p>
            </div>

            <div style={{ marginTop: 32 }}>
              <button className="cta">
                Assinar ticket mensal
              </button>

              <button
                style={{ marginLeft: 12 }}
                onClick={() => navigate(-1)}
              >
                ← Voltar
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
