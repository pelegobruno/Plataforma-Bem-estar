import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { professionals } from "../data/professionals";
import { openWhatsApp } from "../utils/openWhatsApp";

export function Professional() {
  const { id } = useParams();
  const navigate = useNavigate();

  const professional = professionals.find((p) => p.id === id);

  if (!professional) {
    return (
      <>
        <Header />
        <main className="container">
          <h1>Profissional não encontrado</h1>
          <button onClick={() => navigate("/")}>Voltar</button>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="container">
        <h1 className="content-title">{professional.name}</h1>
        <p className="content-subtitle">
          {professional.role} · {professional.approach}
        </p>

        <section className="section">
          <h3>Sobre o atendimento</h3>
          <p className="content-text">{professional.bio}</p>
        </section>

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

        <section className="section">
          <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
  O contato é destinado a esclarecimento de dúvidas e informações
  iniciais sobre o atendimento.
</p>
          <button
  className="secondary"
  style={{ marginTop: 16 }}
  onClick={() =>
    openWhatsApp(
      professional.whatsapp,
      professional.name,
      professional.role
    )
  }
>
  Entrar em contato pelo WhatsApp
</button>
        </section>
      </main>
    </>
  );
}
