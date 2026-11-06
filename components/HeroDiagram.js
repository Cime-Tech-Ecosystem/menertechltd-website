export default function HeroDiagram() {
  return (
    <div className="hero-diagram" aria-hidden="true">
      <svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
        <path className="flow-line active" d="M40,80 C110,80 100,190 190,190" />
        <path className="flow-line active" d="M40,190 L190,190" />
        <path className="flow-line active" d="M40,300 C110,300 100,190 190,190" />
        <path className="flow-line active" d="M230,190 C300,190 290,80 370,80" />
        <path className="flow-line active" d="M230,190 L370,190" />
        <path className="flow-line active" d="M230,190 C300,190 290,300 370,300" />
        <circle cx="40" cy="80" r="5" fill="#ffffff" />
        <circle cx="40" cy="190" r="5" fill="#ffffff" />
        <circle cx="40" cy="300" r="5" fill="#ffffff" />
        <text className="node-label" x="14" y="60">CLIENT SYSTEMS</text>
        <text className="node-label" x="14" y="170">DATA / OPS</text>
        <text className="node-label" x="14" y="280">LEGACY STACK</text>

        <rect x="190" y="160" width="40" height="60" rx="3" fill="#2e141b" stroke="#ffffff" strokeWidth="1.2" />
        <text className="node-label" x="197" y="234" fill="#ffffff">MENERTECH</text>

        <circle cx="370" cy="80" r="5" fill="var(--blue)" />
        <circle cx="370" cy="190" r="5" fill="var(--blue)" />
        <circle cx="370" cy="300" r="5" fill="var(--blue)" />
        <text className="node-label" x="300" y="60">CLOUD PLATFORM</text>
        <text className="node-label" x="300" y="170">SECURITY LAYER</text>
        <text className="node-label" x="300" y="280">SUPPORT DESK</text>
      </svg>
    </div>
  );
}
