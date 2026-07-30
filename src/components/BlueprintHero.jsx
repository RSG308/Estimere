// Abstract SVG blueprint/structural grid graphic for hero sections
export default function BlueprintHero({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[0, 80, 160, 240, 320, 400, 480].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400" stroke="rgba(42,74,127,0.35)" strokeWidth="0.75" />
      ))}
      {[0, 80, 160, 240, 320, 400].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke="rgba(42,74,127,0.35)" strokeWidth="0.75" />
      ))}

      {/* Structural frame */}
      <rect x="48" y="48" width="384" height="304" stroke="rgba(42,74,127,0.5)" strokeWidth="1" fill="none" strokeDasharray="8 4" />

      {/* Main structural box */}
      <rect x="96" y="96" width="288" height="208" stroke="#2A4A7F" strokeWidth="1.5" fill="none" />

      {/* Amber accent lines */}
      <line x1="96" y1="96" x2="160" y2="96" stroke="#E8820C" strokeWidth="2.5" />
      <line x1="96" y1="96" x2="96" y2="160" stroke="#E8820C" strokeWidth="2.5" />
      <line x1="384" y1="304" x2="320" y2="304" stroke="#E8820C" strokeWidth="2.5" />
      <line x1="384" y1="304" x2="384" y2="240" stroke="#E8820C" strokeWidth="2.5" />

      {/* Cross-bracing */}
      <line x1="96" y1="96" x2="384" y2="304" stroke="rgba(42,74,127,0.3)" strokeWidth="1" strokeDasharray="6 4" />
      <line x1="384" y1="96" x2="96" y2="304" stroke="rgba(42,74,127,0.3)" strokeWidth="1" strokeDasharray="6 4" />

      {/* Center circle */}
      <circle cx="240" cy="200" r="40" stroke="#2A4A7F" strokeWidth="1.5" fill="none" />
      <circle cx="240" cy="200" r="4" fill="#E8820C" />
      <line x1="200" y1="200" x2="280" y2="200" stroke="rgba(42,74,127,0.5)" strokeWidth="0.75" />
      <line x1="240" y1="160" x2="240" y2="240" stroke="rgba(42,74,127,0.5)" strokeWidth="0.75" />

      {/* Dimension lines */}
      <line x1="96" y1="32" x2="384" y2="32" stroke="rgba(214,211,205,0.4)" strokeWidth="0.75" />
      <line x1="96" y1="28" x2="96" y2="36" stroke="rgba(214,211,205,0.4)" strokeWidth="0.75" />
      <line x1="384" y1="28" x2="384" y2="36" stroke="rgba(214,211,205,0.4)" strokeWidth="0.75" />
      <text x="240" y="29" fill="rgba(214,211,205,0.5)" fontSize="8" textAnchor="middle" fontFamily="monospace">288.000</text>

      <line x1="448" y1="96" x2="448" y2="304" stroke="rgba(214,211,205,0.4)" strokeWidth="0.75" />
      <line x1="444" y1="96" x2="452" y2="96" stroke="rgba(214,211,205,0.4)" strokeWidth="0.75" />
      <line x1="444" y1="304" x2="452" y2="304" stroke="rgba(214,211,205,0.4)" strokeWidth="0.75" />
      <text x="462" y="204" fill="rgba(214,211,205,0.5)" fontSize="8" textAnchor="middle" fontFamily="monospace" transform="rotate(90,462,204)">208.000</text>

      {/* Corner markers */}
      {[[96,96],[384,96],[96,304],[384,304]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill="none" stroke="#2A4A7F" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="1" fill="#2A4A7F" />
        </g>
      ))}

      {/* Reference callout */}
      <rect x="8" y="360" width="120" height="28" fill="none" stroke="rgba(42,74,127,0.4)" strokeWidth="0.75" />
      <text x="16" y="372" fill="rgba(214,211,205,0.5)" fontSize="7" fontFamily="monospace">DWG: EST-STRUCT-001</text>
      <text x="16" y="382" fill="rgba(214,211,205,0.35)" fontSize="7" fontFamily="monospace">SCALE: 1:200 REV: A</text>

      {/* Structural node points */}
      {[160,240,320].map((x) => (
        <g key={x}>
          <line x1={x} y1="96" x2={x} y2="304" stroke="rgba(42,74,127,0.18)" strokeWidth="0.75" />
          <circle cx={x} cy="96" r="2" fill="rgba(42,74,127,0.5)" />
          <circle cx={x} cy="304" r="2" fill="rgba(42,74,127,0.5)" />
        </g>
      ))}
      {[160,240].map((y) => (
        <g key={y}>
          <line x1="96" y1={y} x2="384" y2={y} stroke="rgba(42,74,127,0.18)" strokeWidth="0.75" />
          <circle cx="96" cy={y} r="2" fill="rgba(42,74,127,0.5)" />
          <circle cx="384" cy={y} r="2" fill="rgba(42,74,127,0.5)" />
        </g>
      ))}
    </svg>
  );
}