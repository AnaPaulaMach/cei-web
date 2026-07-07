import { ImageResponse } from "next/og";

export const alt = "Comision de Estudiantes de Informatica de la Universidad Nacional de Santiago del Estero";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #102a43 0%, #0f2a5f 52%, #07111f 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 56,
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#e5e7eb",
            border: "6px solid #0f2a5f",
            boxShadow: "18px 18px 0 rgba(7, 17, 31, 0.35)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
            width: "100%"
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "linear-gradient(90deg, #0f2a5f, #1d4ed8)",
              color: "white",
              display: "flex",
              fontSize: 30,
              fontWeight: 900,
              justifyContent: "space-between",
              padding: "18px 24px"
            }}
          >
            <span>CEI/share-preview.exe</span>
            <span style={{ color: "#fde047" }}>UNSE</span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              padding: "46px 64px"
            }}
          >
            <div
              style={{
                color: "#22c55e",
                fontFamily: "monospace",
                fontSize: 32,
                fontWeight: 900,
                marginBottom: 24
              }}
            >
              Windows XP / Minecraft / informatica retro
            </div>
            <div
              style={{
                color: "#0f2a5f",
                fontSize: 82,
                fontWeight: 900,
                letterSpacing: 0,
                lineHeight: 0.95,
                maxWidth: 880
              }}
            >
              Comision de Estudiantes de Informatica
            </div>
            <div
              style={{
                color: "#07111f",
                fontSize: 34,
                fontWeight: 700,
                lineHeight: 1.25,
                marginTop: 28,
                maxWidth: 920
              }}
            >
              Eventos, oportunidades y comunidad estudiantil en la Universidad Nacional de Santiago del Estero.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
