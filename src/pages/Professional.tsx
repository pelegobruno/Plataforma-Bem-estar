import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { professionals } from "../data/professionals";

export function Professional() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const professional = professionals.find((p) => p.id === id);

  // ❌ PROFISSIONAL NÃO ENCONTRADO
  if (!professional) {
    return (
      <>
        <Header />
        <main className="container">
          <h1>Profissional não encontrado</h1>
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
        <h1 className="content-title">{professional.name}</h1>

        <p className="content-subtitle">
          {professional.role} · {professional.approach}
        </p>

        {/* IMAGEM DO PROFISSIONAL */}
        {professional.image && (
          <img
  src={professional.image}
  alt={professional.name}
  className="profile-avatar"
/>
        )}

        {/* BIO */}
        <section className="section">
          <h3>Sobre o atendimento</h3>
          <p className="content-text">{professional.bio}</p>
        </section>

        {/* ÁREAS */}
        <section className="section">
          <h3>Áreas de atuação</h3>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            {professional.areas.map((area) => (
              <li key={area} style={{ marginBottom: 6 }}>
                {area}
              </li>
            ))}
          </ul>
        </section>

        {/* BLOQUEIO DE CONTATO (SEM WHATSAPP AINDA) */}
        <section className="section">
          <div className="card premium-box">
            <h3>Acesso ao atendimento</h3>

            <p className="content-text">
              Para entrar em contato com este profissional, é necessário
              possuir cadastro.
            </p>

            <button className="cta" onClick={() => navigate("/")}>
              Ser atendimento
            </button>
          </div>

          <button
            style={{ marginTop: 24 }}
            onClick={() => navigate(-1)}
          >
            ← Voltar
          </button>
        </section>
      </main>
    </>
  );
}
