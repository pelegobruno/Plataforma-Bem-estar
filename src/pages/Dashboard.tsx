import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { professionals } from "../data/professionals";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="container fade-in">
        <h1 style={{ marginBottom: 8 }}>Bem-vindo 👋</h1>

        <p style={{ color: "#6b7280", marginBottom: 16 }}>
          Informações confiáveis e materiais psicoeducativos elaborados
          por psicólogos e nutricionistas.
        </p>

        <p
          style={{
            fontSize: "0.85rem",
            color: "#6b7280",
            maxWidth: 600,
            marginBottom: 24,
          }}
        >
          Este ambiente foi pensado para oferecer informações responsáveis
          e não substitui acompanhamento profissional quando necessário.
        </p>

        {/* CONTEÚDOS GRATUITOS */}
        <section className="section">
          <h2>Conteúdos Gratuitos</h2>

          <div className="cards">
            <div className="card fade-in fade-delay-1">
              <h3>Ansiedade</h3>
              <p>Entenda o que é e como lidar.</p>
              <button onClick={() => navigate("/conteudo/ansiedade")}>
                Ler material
              </button>
            </div>

            <div className="card fade-in fade-delay-2">
              <h3>Alimentação Saudável</h3>
              <p>Primeiros passos para uma rotina melhor.</p>
              <button onClick={() => navigate("/conteudo/alimentacao")}>
                Ler material
              </button>
            </div>
          </div>
        </section>

        {/* PROFISSIONAIS */}
        <section className="section">
          <h2>Profissionais</h2>

          <div className="cards">
            {professionals.map((prof, index) => (
              <div
                className={`card fade-in fade-delay-${index + 1}`}
                key={prof.id}
              >
                <h3>{prof.name}</h3>
                <p>{prof.role}</p>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  {prof.approach}
                </p>

                <button
                  onClick={() => navigate(`/profissional/${prof.id}`)}
                >
                  Ver perfil
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CONTEÚDOS PREMIUM */}
        <section className="section">
          <h2>Conteúdos Premium 🔒</h2>

          <div className="cards">
            <div className="card locked fade-in fade-delay-1">
              <h3>Controle da Ansiedade</h3>
              <p>Material exclusivo para assinantes.</p>
              <button
                className="secondary"
                onClick={() =>
                  navigate("/conteudo/controle-ansiedade")
                }
              >
                Conhecer conteúdo
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
