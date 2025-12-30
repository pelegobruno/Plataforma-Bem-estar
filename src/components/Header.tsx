import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "14px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#4CAF50" }}>
          Plataforma Bem-estar
        </h2>

        <nav>
          <Link
            to="/sobre"
            style={{
              fontSize: "0.9rem",
              color: "#4CAF50",
              textDecoration: "none",
            }}
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
