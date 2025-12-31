import { useEffect } from "react";

export function Splash() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = sessionStorage.getItem("splashShown");

    if (alreadyShown) {
      const splash = document.getElementById("splash");
      splash?.remove();
      return;
    }

    sessionStorage.setItem("splashShown", "true");

    const timer = window.setTimeout(() => {
      const splash = document.getElementById("splash");
      splash?.remove();
    }, 15000); // ✅ 15 SEGUNDOS

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div id="splash" className="splash-wrapper">
      <div className="splash-content">
        <img
          src="/icons/app-icon-1024.png"
          alt="Plataforma Saúde"
          className="splash-icon"
        />

        <div className="splash-text">
          <h1 style={{ fontSize: "1.8rem", marginBottom: 8 }}>
            Plataforma Bem-estar
          </h1>
          <p style={{ opacity: 0.9 }}>
            Informação, cuidado e acolhimento
          </p>
        </div>
      </div>
    </div>
  );
}
