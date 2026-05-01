export function NowPlaying() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, rgba(250, 82, 15, 0.15) 0%, #0f0f0f 100%)",
        padding: "80px 24px 48px",
        borderTop: "1px solid #262626",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              className="animate-pulse"
              style={{
                width: 8,
                height: 8,
                background: "#fa520f",
              }}
            />
            <span
              style={{
                fontSize: 11,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Currently
            </span>
          </div>
          <p
            style={{
              fontSize: 24,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#ffffff",
              maxWidth: 500,
            }}
          >
            Designing the AI coach experience at FutureFit AI
          </p>
          <p
            style={{
              fontSize: 14,
              color: "#ffffff",
              opacity: 0.6,
              marginTop: 8,
            }}
          >
            Toronto, Canada
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a
            href="mailto:edwinsocrateslara@gmail.com"
            style={{
              fontSize: 14,
              color: "#ffffff",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fa520f"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#ffffff"
            }}
          >
            Email
          </a>
          <a
            href="https://www.edwinsocrates.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: "#ffffff",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fa520f"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#ffffff"
            }}
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  )
}
