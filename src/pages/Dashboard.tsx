import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { professionals } from "../data/professionals";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="container">
        <h1 style={{ marginBottom: 8 }}>Bem-vindo 👋</h1>
<p style={{ color: "#6b7280", marginBottom: 24 }}>
  Materiais informativos produzidos por psicólogos e nutricionistas
  para apoio ao cuidado em saúde mental e alimentar.
</p>
        <section className="section">
          <h2>Conteúdos Gratuitos</h2>

          <div className="cards">
            <div className="card">
              <h3>Ansiedade</h3>
              <p>Entenda o que é e como lidar.</p>
              <button onClick={() => navigate("/conteudo/ansiedade")}>
                Ver conteúdo
              </button>
            </div>

            <div className="card">
              <h3>Alimentação Saudável</h3>
              <p>Primeiros passos para uma rotina melhor.</p>
              <button onClick={() => navigate("/conteudo/alimentacao")}>
                Ver conteúdo
              </button>
            </div>
          </div>
        </section>

        <section className="section">
  <h2>Profissionais</h2>

  <div className="cards">
    {professionals.map((prof) => (
      <div className="card" key={prof.id}>
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



        <section className="section">
          <h2>Conteúdos Premium 🔒</h2>

          <div className="cards">
            <div className="card locked">
              <h3>Controle da Ansiedade</h3>
              <p>Material exclusivo para assinantes.</p>
              <button
                className="secondary"
                onClick={() => navigate("/conteudo/controle-ansiedade")}
              >
                Acessar
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
