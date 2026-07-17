import { ImageResponse } from "next/og";

export const alt = "Comisión de Estudiantes de Informática de la Universidad Nacional de Santiago del Estero";
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
            "linear-gradient(135deg, #151b24 0%, #172131 52%, #10151d 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 56,
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#c9d0da",
            border: "6px solid #172131",
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
              background: "linear-gradient(90deg, #172131, #2d5688)",
              color: "white",
              display: "flex",
              fontSize: 30,
              fontWeight: 900,
              justifyContent: "space-between",
              padding: "18px 24px"
            }}
          >
            <span>CEI/share-preview.exe</span>
            <span style={{ color: "#ddb93f" }}>UNSE</span>
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
                color: "#3b966b",
                fontFamily: "monospace",
                fontSize: 32,
                fontWeight: 900,
                marginBottom: 24
              }}
            >
              Windows XP / Minecraft / informática retro
            </div>
            <div
              style={{
                color: "#172131",
                fontSize: 82,
                fontWeight: 900,
                letterSpacing: 0,
                lineHeight: 0.95,
                maxWidth: 880
              }}
            >
              Comisión de Estudiantes de Informática
            </div>
            <div
              style={{
                color: "#10151d",
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
