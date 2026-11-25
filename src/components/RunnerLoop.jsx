// Petit personnage rond qui court en boucle entre les quatre pôles du profil.
// Animation 100 % SVG + CSS (voir la section « Runner » de styles.css).
const LAP = '16s'
const PATH = 'M100 110H300V310H100Z'

const PILLS = [
  { x: 100, y: 50, label: 'Data', delay: '0s' },
  { x: 300, y: 50, label: 'Code', delay: '-1s' },
  { x: 300, y: 360, label: 'IA', delay: '-2s' },
  { x: 100, y: 360, label: 'Humain', delay: '-3s', accent: true },
]

function Runner() {
  return (
    <g transform="scale(1.35)">
      <ellipse className="runner__shadow" cx="0" cy="0" rx="12" ry="3.5" />
      <g>
        {/* Se retourne quand il court vers la gauche */}
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1 1;1 1;-1 1;-1 1"
          keyTimes="0;.25;.5;.75"
          calcMode="discrete"
          dur={LAP}
          repeatCount="indefinite"
        />
        <g className="runner__step">
          <g className="runner__foot runner__foot--a"><ellipse cx="-6" cy="-3" rx="5.5" ry="3.5" /></g>
          <g className="runner__foot runner__foot--b"><ellipse cx="6" cy="-3" rx="5.5" ry="3.5" /></g>
          <g className="runner__body">
            <g transform="translate(-12,-15)"><line className="runner__arm runner__arm--a" x1="0" y1="0" x2="-3" y2="8" /></g>
            <g transform="translate(12,-15)"><line className="runner__arm runner__arm--b" x1="0" y1="0" x2="3" y2="8" /></g>
            <path className="runner__skin" d="M-13 -16C-13 -33 13 -33 13 -16C13 -6 7 -3 0 -3C-7 -3 -13 -6 -13 -16Z" />
            <path className="runner__band" d="M-12.4 -22.5Q0 -29 12.4 -22.5" />
            <circle cx="-4.5" cy="-18" r="4.3" fill="#fff" />
            <circle cx="4.5" cy="-18" r="4.3" fill="#fff" />
            <g>
              {/* Les pupilles suivent la direction de la course */}
              <animateTransform
                attributeName="transform"
                type="translate"
                values="1.6 0;0 1.6;1.6 0;0 -1.6"
                keyTimes="0;.25;.5;.75"
                calcMode="discrete"
                dur={LAP}
                repeatCount="indefinite"
              />
              <circle cx="-4.5" cy="-18" r="2.1" fill="#3a2420" />
              <circle cx="4.5" cy="-18" r="2.1" fill="#3a2420" />
            </g>
            <circle cx="-9" cy="-11.5" r="2.4" fill="#f4a8b8" opacity=".85" />
            <circle cx="9" cy="-11.5" r="2.4" fill="#f4a8b8" opacity=".85" />
            <path d="M-3 -10.5Q0 -7.5 3 -10.5" fill="none" stroke="#3a2420" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </g>
  )
}

export default function RunnerLoop() {
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return (
    <svg className="runner-loop" viewBox="0 0 400 400" role="img" aria-label="Un petit personnage court entre Data, Code, IA et Humain">
      <defs>
        <clipPath id="loopClip"><circle cx="200" cy="200" r="186" /></clipPath>
      </defs>

      {/* Quadrillage léger, devant le rond rose */}
      <g className="runner-loop__grid" clipPath="url(#loopClip)">
        <path d="M20 90H380M20 150H380M20 210H380M20 270H380M20 330H380" />
        <path d="M70 20V380M130 20V380M190 20V380M250 20V380M310 20V380M370 20V380" />
      </g>

      <path className="runner-loop__track" d={PATH} />
      <path className="runner-loop__dashes" d={PATH} />

      <g className="runner-loop__mono">
        <circle cx="200" cy="210" r="34" />
        <text x="200" y="222" textAnchor="middle">R</text>
      </g>

      {PILLS.map((p) => (
        <g key={p.label} className="runner-loop__pill" style={{ animationDelay: p.delay }}>
          <rect x={p.x - 48} y={p.y - 18} width="96" height="36" rx="18" className={p.accent ? 'is-accent' : ''} />
          <text x={p.x} y={p.y + 5} textAnchor="middle" className={p.accent ? 'is-accent' : ''}>{p.label}</text>
        </g>
      ))}

      {/* Un petit effet à chaque arrivée */}
      <g className="runner-loop__fx" style={{ animationDelay: '-.3s' }}>
        <rect x="158" y="40" width="7" height="12" rx="2" fill="#c9627a" />
        <rect x="168" y="32" width="7" height="20" rx="2" fill="#8a5a44" />
        <rect x="178" y="24" width="7" height="28" rx="2" fill="#c9627a" />
        <rect x="188" y="34" width="7" height="18" rx="2" fill="#8a5a44" />
      </g>
      <text className="runner-loop__fx runner-loop__code" style={{ animationDelay: '3.7s' }} x="222" y="58" textAnchor="middle">&lt;/&gt;</text>
      <path className="runner-loop__fx" style={{ animationDelay: '7.7s' }} d="M226 348L229.5 358L240 362L229.5 366L226 376L222.5 366L212 362L222.5 358Z" fill="#EF9F27" />
      <path className="runner-loop__fx" style={{ animationDelay: '11.7s' }} d="M174 372C157 360 164 346 174 355C184 346 191 360 174 372Z" fill="#c9627a" />

      <g className="runner" transform={reduceMotion ? 'translate(100,110)' : undefined}>
        {!reduceMotion && <animateMotion dur={LAP} repeatCount="indefinite" path={PATH} />}
        <Runner />
      </g>
    </svg>
  )
}
