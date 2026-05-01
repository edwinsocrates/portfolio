"use client"

export function SideOfDesk() {
  return (
    <section
      id="ai"
      style={{
        background: "transparent",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "48px 24px 56px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 24,
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#fa520f",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>■</span> AI Practice
          </div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Side of Desk
          </h2>
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "#b4b4b4",
            margin: 0,
            textAlign: "right",
            maxWidth: 320,
          }}
        >
          Using AI tools to improve how the team works — faster feedback loops,
          less manual overhead.
        </p>
      </div>

      {/* Top grid - 2 tool cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
          marginBottom: 12,
        }}
      >
        {/* Tool Card 1 */}
        <div
          style={{
            background: "#1a1a1a",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#fa520f",
              }}
            >
              FutureFit AI
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Slack API", "Canny"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "3px 8px",
                    fontSize: 10,
                    color: "#b4b4b4",
                    background: "#262626",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Slack → Canny feedback routing
          </h3>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              color: "#b4b4b4",
              margin: 0,
            }}
          >
            Feedback was getting lost in Slack threads. I built a slash command
            that files ideas into a Canny card, routes it to the right board,
            and drops a confirmation in the thread.
          </p>
        </div>

        {/* Tool Card 2 */}
        <div
          style={{
            background: "#1a1a1a",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#fa520f",
              }}
            >
              FutureFit AI
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Shadcn", "v0"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "3px 8px",
                    fontSize: 10,
                    color: "#b4b4b4",
                    background: "#262626",
                    textTransform: "uppercase",
                    letterSpacing: "0.3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#ffffff",
              margin: 0,
            }}
          >
            AI-compatible design system
          </h3>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.5,
              color: "#b4b4b4",
              margin: 0,
            }}
          >
            Built our design system on Shadcn with proper design tokens, so
            developers have a clear reference and AI tools like v0 and Claude
            Code can work from the real system.
          </p>
        </div>
      </div>

      {/* Proto card - full width */}
      <div
        style={{
          background: "#fff0c2",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          marginBottom: 12,
          boxShadow: "rgba(127, 99, 21, 0.08) 0px 4px 12px",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#fa520f",
              marginBottom: 4,
            }}
          >
            FutureFit AI · Coinley AI
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Vibe-coded AI prototypes
          </h3>
        </div>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "#1f1f1f",
            opacity: 0.6,
            margin: 0,
            flex: 1,
          }}
        >
          Used Claude Code and Vercel to build working prototypes connected to
          the Claude API.
        </p>
        <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
          {["Claude Code", "Vercel", "Claude API"].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 8px",
                fontSize: 10,
                color: "#1f1f1f",
                background: "#fffaeb",
                textTransform: "uppercase",
                letterSpacing: "0.3px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Demo grid - 2 demo cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        {/* Demo Card 1 */}
        <div
          style={{
            background: "#1a1a1a",
            cursor: "pointer",
            transition: "background 0.15s",
            boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 12px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#262626"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1a1a1a"
          }}
        >
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#fa520f",
                  marginBottom: 4,
                }}
              >
                FutureFit AI
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1f1f1f",
                  margin: 0,
                }}
              >
                AI career counselor
              </h3>
              <div
                style={{
                  fontSize: 12,
                  color: "#787878",
                  margin: "4px 0 0",
                }}
              >
                Claude API · Vercel · user tested
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: "#fa520f",
                  whiteSpace: "nowrap",
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                View →
              </span>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.5px",
                padding: "4px 10px",
                textTransform: "uppercase",
                flexShrink: 0,
                background: "#fa520f",
                color: "#ffffff",
              }}
            >
              In progress
            </span>
          </div>
        </div>

        {/* Demo Card 2 */}
        <div
          style={{
            background: "#1a1a1a",
            cursor: "pointer",
            transition: "background 0.15s",
            boxShadow: "rgba(250, 82, 15, 0.08) 0px 4px 12px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#262626"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1a1a1a"
          }}
        >
          <div
            style={{
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#fa520f",
                  marginBottom: 4,
                }}
              >
                Coinley AI
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1f1f1f",
                  margin: 0,
                }}
              >
                AI crypto investing agent
              </h3>
              <div
                style={{
                  fontSize: 12,
                  color: "#787878",
                  margin: "4px 0 0",
                }}
              >
                Live MVP · App Store
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: "#fa520f",
                  whiteSpace: "nowrap",
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                View →
              </span>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.5px",
                padding: "4px 10px",
                textTransform: "uppercase",
                flexShrink: 0,
                background: "#1f1f1f",
                color: "#ffffff",
              }}
            >
              Live
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
