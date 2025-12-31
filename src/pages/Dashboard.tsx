import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { professionals } from "../data/professionals";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="container fade-in">
  <div className="page-header">
    <h1 style={{ textAlign: "center" }}>Bem-vindo 👋</h1>

    <p className="subtitle-muted">
      Informações confiáveis e materiais psicoeducativos elaborados
      por psicólogos e nutricionistas.
    </p>
  </div>

  <section className="institutional">
    <h2 style={{ textAlign: "center" }}>Plataforma Bem-estar</h2>

    <p>
      Nossa missão é oferecer informação responsável, acolhimento e
      acesso facilitado a profissionais da saúde mental e nutricional.
      Trabalhamos com ética, cuidado e compromisso com o bem-estar,
      promovendo autonomia, consciência e qualidade de vida.
    </p>
  </section>


        <p className="content-subtitle">
          Informações confiáveis e materiais psicoeducativos elaborados
          por psicólogos e nutricionistas.
        </p>

        {/* CONTEÚDOS GRATUITOS */}
        <section className="section">
          <h2>Conteúdos Gratuitos</h2>

          <div className="cards professionals">
            <div className="card card-horizontal">
              <img
                src="/contents/ansiedade.jpg"
                alt="Ansiedade"
                className="card-image"
              />

              <div className="card-content">
                <h3>Ansiedade</h3>
                <p>Entenda o que é e como lidar.</p>

                <button onClick={() => navigate("/conteudo/ansiedade")}>
                  Ler material
                </button>
              </div>
            </div>

            <div className="card card-horizontal">
              <img
                src="/contents/alimentacao.jpg"
                alt="Alimentação Saudável"
                className="card-image"
              />

              <div className="card-content">
                <h3>Alimentação Saudável</h3>
                <p>Primeiros passos para uma rotina melhor.</p>

                <button onClick={() => navigate("/conteudo/alimentacao")}>
                  Ler material
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROFISSIONAIS */}
        <section className="section">
          <h2>Profissionais</h2>

          <div className="cards professionals">
            {professionals.map((prof) => (
              <div
                className="card card-horizontal"
                key={prof.id}
              >
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="card-image"
                />

                <div className="card-content">
                  <h3>{prof.name}</h3>
                  <p className="text-muted">{prof.role}</p>
                  <p>{prof.approach}</p>

                  <button
                    onClick={() =>
                      navigate(`/profissional/${prof.id}`)
                    }
                  >
                    Ver perfil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PREMIUM */}
        <section className="section">
  <h2>Conteúdos Premium 🔒</h2>

  <div className="cards">
    <div className="card card-horizontal locked">
      <img
        src="/contents/premium.jpg"
        className="card-image"
        alt="Ticket mensal"
      />

      <div className="card-content">
        <h3>Ticket Mensal</h3>
        <p>Acesso completo a conteúdos exclusivos.</p>
        <button className="secondary">Assinar</button>
      </div>
    </div>

    <div className="card card-horizontal locked">
      <img
        src="/contents/consulta.jpg"
        className="card-image"
        alt="Consulta individual"
      />

      <div className="card-content">
        <h3>Consulta Individual</h3>
        <p>Atendimento com profissional escolhido.</p>
        <button className="secondary">Saiba mais</button>
      </div>
    </div>

    <div className="card card-horizontal locked">
      <img
        src="/contents/pacote.jpg"
        className="card-image"
        alt="Pacotes"
      />

      <div className="card-content">
        <h3>Pacotes Temáticos</h3>
        <p>Ansiedade, alimentação, infantil e mais.</p>
        <button className="secondary">Conhecer</button>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
}
