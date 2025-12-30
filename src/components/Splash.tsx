import { useEffect } from "react";

export function Splash() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const splash = document.getElementById("splash-screen");
    if (!splash) return;

    const alreadyShown = sessionStorage.getItem("splashShown");

    // Se já foi exibido, remove imediatamente
    if (alreadyShown) {
      splash.remove();
      return;
    }

    // Marca como exibido
    sessionStorage.setItem("splashShown", "true");

    // Remove após o tempo definido
    const timer = window.setTimeout(() => {
      splash.style.opacity = "0";

      setTimeout(() => {
        splash.remove();
      }, 400);
    }, 1600);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="splash-screen"
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #4CAF50, #5C9DED)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        color: "#ffffff",
        fontFamily: "Inter, sans-serif",
        transition: "opacity 0.4s ease",
      }}
    >
      <div style={{ textAlign: "center", animation: "fadeUp 0.6s ease-out" }}>
        <h1 style={{ fontSize: "1.8rem", marginBottom: 8 }}>
          Plataforma Bem-estar
        </h1>
        <p style={{ opacity: 0.9 }}>
          Cuidado, informação e acolhimento
        </p>
      </div>
    </div>
  );
}
