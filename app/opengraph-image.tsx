import { ImageResponse } from "next/og";

export const alt =
  "Selyan Mouhali — Founder de Privasee · Étudiant ingénieur UTT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#ecebe6",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8b8b93",
          }}
        >
          <span>Portfolio</span>
          <span>selyanmouhali.fr</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Selyan Mouhali
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 38, color: "#c9c7c0" }}>
            Founder de Privasee — DLP pour l'IA
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          {[
            "Finaliste MégaWatt'UTT ×EDF",
            "Cité dans Le Parisien",
            "Étudiant ingénieur UTT",
          ].map((b) => (
            <div
              key={b}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 26,
                color: "#d6d4ce",
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
