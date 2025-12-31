import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO / NOME */}
        <h1
          style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#4caf50",
          }}
        >
          Plataforma Bem-estar
        </h1>

        {/* AÇÕES */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          {/* SOBRE */}
          <Link
            to="/sobre"
            style={{
              fontSize: "0.9rem",
              color: "#4caf50",
              textDecoration: "none",
            }}
          >
            Sobre
          </Link>

          {/* ENTRAR */}
          <button
            style={{
              background: "transparent",
              color: "#4caf50",
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: "0.85rem",
            }}
          >
            Entrar
          </button>

          {/* CADASTRE-SE */}
          <button
            style={{
              background: "#4caf50",
              color: "#ffffff",
              padding: "6px 14px",
              borderRadius: 8,
              fontSize: "0.85rem",
            }}
          >
            Cadastre-se
          </button>
        </nav>
      </div>
    </header>
  );
}
