import { Header } from "../components/Header";

export function About() {
  return (
    <>
      <Header />

      <main className="container">
        <h1 className="content-title">Sobre a Plataforma</h1>

        <p className="content-subtitle">
          Um espaço digital pensado para cuidado, informação e acolhimento.
        </p>

        <section className="section">
          <h3>Propósito</h3>
          <p className="content-text">
            A Plataforma Bem-estar foi criada para oferecer materiais
            psicoeducativos e informações confiáveis nas áreas de
            psicologia e nutrição.
          </p>

          <p className="content-text">
            Nosso objetivo é facilitar o acesso à informação de qualidade,
            respeitando os limites éticos do cuidado em saúde.
          </p>
        </section>

        <section className="section">
          <h3>Psicologia e Nutrição</h3>
          <p className="content-text">
            Os conteúdos disponíveis são elaborados por profissionais
            da saúde, com base em práticas reconhecidas e linguagem acessível.
          </p>

          <p className="content-text">
            A plataforma não substitui acompanhamento psicológico ou
            nutricional individualizado, mas pode servir como apoio
            informativo e educativo.
          </p>
        </section>

        <section className="section">
  <p
    style={{
      fontSize: "0.85rem",
      color: "#6b7280",
      maxWidth: 700,
    }}
  >
    Em caso de sofrimento intenso ou necessidade de acompanhamento,
    procure um profissional de saúde qualificado.
  </p>
</section>

<section className="section">
  <button
    onClick={() => window.history.back()}
    style={{
      background: "transparent",
      border: "none",
      color: "#4CAF50",
      fontSize: "0.95rem",
      cursor: "pointer",
      padding: 0,
    }}
  >
    ← Voltar
  </button>
</section>

      </main>
    </>
  );
}
