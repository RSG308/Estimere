/**
 * Renders an insight article body from the block array defined in
 * src/data/insights.js. Block types: p, h2, h3, ul, ol, quote, callout.
 */
export default function ArticleBody({ blocks }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                style={{
                  color: "#0D1F3C",
                  fontWeight: 900,
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  letterSpacing: "-0.015em",
                  marginTop: "48px",
                  marginBottom: "16px",
                  lineHeight: 1.25,
                }}
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                style={{
                  color: "#0D1F3C",
                  fontWeight: 800,
                  fontSize: "18px",
                  marginTop: "32px",
                  marginBottom: "10px",
                }}
              >
                {block.text}
              </h3>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-3" style={{ marginTop: "20px", marginBottom: "20px" }}>
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#E8820C",
                        marginTop: "10px",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "#1A1A1A", opacity: 0.78, fontSize: "17px", lineHeight: 1.8 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="space-y-4" style={{ marginTop: "20px", marginBottom: "20px" }}>
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span
                      style={{
                        color: "#E8820C",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        fontSize: "14px",
                        letterSpacing: "0.05em",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    >
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: "#1A1A1A", opacity: 0.78, fontSize: "17px", lineHeight: 1.8 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                style={{
                  borderLeft: "4px solid #E8820C",
                  paddingLeft: "28px",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <p
                  style={{
                    color: "#0D1F3C",
                    fontSize: "clamp(19px, 2vw, 23px)",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {block.text}
                </p>
              </blockquote>
            );

          case "callout":
            return (
              <div
                key={i}
                style={{
                  border: "1px solid #D6D3CD",
                  borderLeft: "4px solid #2A4A7F",
                  backgroundColor: "#FFFFFF",
                  padding: "24px",
                  marginTop: "36px",
                  marginBottom: "36px",
                }}
              >
                <div
                  style={{
                    color: "#2A4A7F",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    marginBottom: "10px",
                  }}
                >
                  In Practice
                </div>
                <p style={{ color: "#1A1A1A", opacity: 0.8, fontSize: "16px", lineHeight: 1.75 }}>
                  {block.text}
                </p>
              </div>
            );

          case "p":
          default:
            return (
              <p
                key={i}
                style={{
                  color: "#1A1A1A",
                  opacity: 0.78,
                  fontSize: "17px",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
