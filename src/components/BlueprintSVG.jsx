export default function BlueprintSVG({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      {[0, 60, 120, 180, 240, 300, 360, 420, 480].map((v) => (
        <g key={v}>
          <line x1={v} y1="0" x2={v} y2="480" stroke="rgba(42,74,127,0.3)" strokeWidth="0.5" />
          <line x1="0" y1={v} x2="480" y2={v} stroke="rgba(42,74,127,0.3)" strokeWidth="0.5" />
        </g>
      ))}

      {/* Main structural frame */}
      <rect x="60" y="60" width="360" height="360" stroke="rgba(42,74,127,0.6)" strokeWidth="1" fill="none" />

      {/* Cross-section diagonals */}
      <line x1="60" y1="60" x2="420" y2="420" stroke="rgba(42,74,127,0.2)" strokeWidth="0.5" strokeDasharray="4 8" />
      <line x1="420" y1="60" x2="60" y2="420" stroke="rgba(42,74,127,0.2)" strokeWidth="0.5" strokeDasharray="4 8" />

      {/* Central plan shape */}
      <rect x="120" y="120" width="240" height="240" stroke="rgba(232,130,12,0.5)" strokeWidth="1.5" fill="rgba(232,130,12,0.03)" />

      {/* Inner detail */}
      <rect x="180" y="180" width="120" height="120" stroke="rgba(42,74,127,0.5)" strokeWidth="1" fill="none" />

      {/* Section hatching — top */}
      {[0, 10, 20, 30, 40, 50].map((i) => (
        <line key={i} x1={120 + i * 4} y1="120" x2={120 + i * 4 + 60} y2="60" stroke="rgba(42,74,127,0.15)" strokeWidth="0.5" />
      ))}

      {/* Corner crosses */}
      {[[120, 120], [360, 120], [120, 360], [360, 360]].map(([cx, cy], i) => (
        <g key={i}>
          <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} stroke="#E8820C" strokeWidth="1.5" />
          <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} stroke="#E8820C" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="3" stroke="#E8820C" strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* Dimension lines */}
      <line x1="120" y1="44" x2="360" y2="44" stroke="rgba(245,244,242,0.3)" strokeWidth="0.75" />
      <line x1="120" y1="40" x2="120" y2="48" stroke="rgba(245,244,242,0.3)" strokeWidth="0.75" />
      <line x1="360" y1="40" x2="360" y2="48" stroke="rgba(245,244,242,0.3)" strokeWidth="0.75" />

      {/* Dimension text */}
      <text x="240" y="38" textAnchor="middle" fill="rgba(245,244,242,0.35)" fontSize="9" fontFamily="Courier New" letterSpacing="0.08em">240.00m</text>

      {/* Vertical dimension */}
      <line x1="44" y1="120" x2="44" y2="360" stroke="rgba(245,244,242,0.3)" strokeWidth="0.75" />
      <line x1="40" y1="120" x2="48" y2="120" stroke="rgba(245,244,242,0.3)" strokeWidth="0.75" />
      <line x1="40" y1="360" x2="48" y2="360" stroke="rgba(245,244,242,0.3)" strokeWidth="0.75" />
      <text x="30" y="244" textAnchor="middle" fill="rgba(245,244,242,0.35)" fontSize="9" fontFamily="Courier New" letterSpacing="0.08em" transform="rotate(-90,30,244)">240.00m</text>

      {/* Annotation circles */}
      <circle cx="240" cy="240" r="12" stroke="rgba(232,130,12,0.4)" strokeWidth="1" fill="none" />
      <circle cx="240" cy="240" r="4" fill="#E8820C" fillOpacity="0.5" />

      {/* Reference labels */}
      <text x="370" y="175" fill="rgba(245,244,242,0.25)" fontSize="8" fontFamily="Courier New" letterSpacing="0.1em">A-01</text>
      <text x="370" y="255" fill="rgba(245,244,242,0.25)" fontSize="8" fontFamily="Courier New" letterSpacing="0.1em">A-02</text>
      <text x="370" y="335" fill="rgba(245,244,242,0.25)" fontSize="8" fontFamily="Courier New" letterSpacing="0.1em">A-03</text>

      {/* Title block */}
      <rect x="280" y="400" width="140" height="48" stroke="rgba(42,74,127,0.4)" strokeWidth="0.75" fill="none" />
      <line x1="280" y1="415" x2="420" y2="415" stroke="rgba(42,74,127,0.3)" strokeWidth="0.5" />
      <text x="350" y="411" textAnchor="middle" fill="rgba(245,244,242,0.2)" fontSize="7" fontFamily="Courier New" letterSpacing="0.1em">ESTIMERE</text>
      <text x="350" y="428" textAnchor="middle" fill="rgba(232,130,12,0.35)" fontSize="7" fontFamily="Courier New" letterSpacing="0.08em">DWG REF: FE-SITE-001</text>
      <text x="350" y="441" textAnchor="middle" fill="rgba(245,244,242,0.15)" fontSize="7" fontFamily="Courier New">SCALE 1:500</text>
    </svg>
  );
}