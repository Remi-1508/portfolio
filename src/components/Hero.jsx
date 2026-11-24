import { profile } from '../data.js'

// Un parcours GPX qui se dessine en forme de cœur : clin d'œil à RunToDraw.
function RouteArt() {
  return (
    <svg className="route-art" viewBox="0 0 400 400" role="img" aria-label="Un parcours GPX dessinant un cœur">
      <defs>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E58CA0" />
          <stop offset="100%" stopColor="#8A5A44" />
        </linearGradient>
      </defs>
      {/* faux réseau de rues */}
      <g className="route-art__streets">
        <path d="M20 90 H380 M20 160 H380 M20 230 H380 M20 300 H380" />
        <path d="M80 20 V380 M150 20 V380 M220 20 V380 M290 20 V380 M350 20 V380" />
      </g>
      <path
        className="route-art__path"
        d="M200 330 C 90 250 50 190 50 140 C 50 90 90 62 130 62 C 165 62 190 82 200 110 C 210 82 235 62 270 62 C 310 62 350 90 350 140 C 350 190 310 250 200 330 Z"
        pathLength="1"
        fill="none"
        stroke="url(#routeGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="route-art__start" cx="200" cy="330" r="9" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">Bonjour, je suis</p>
          <h1 className="hero__title">
            {profile.name}<span className="dot">.</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="status"><span className="status__dot" />{profile.status}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">Me contacter</a>
            <a className="btn btn--ghost" href="#projet">Voir RunToDraw</a>
          </div>

          <ul className="hero__links">
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.cv} target="_blank" rel="noreferrer">CV</a></li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <div className="hero__blob" />
          <RouteArt />
          <div className="chip chip--float">📍 {profile.location}</div>
        </div>
      </div>

      <a className="scroll-hint" href="#apropos" aria-label="Descendre">
        <span />
      </a>
    </section>
  )
}
