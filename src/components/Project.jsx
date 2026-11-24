import Reveal from './Reveal.jsx'
import { project } from '../data.js'

export default function Project() {
  return (
    <section className="section section--dark" id="projet">
      <div className="container project">
        <Reveal className="project__intro">
          <p className="eyebrow eyebrow--light">{project.kicker} · {project.name}</p>
          <h2 className="section__title">{project.title}</h2>
          <p className="project__text">{project.text}</p>

          <ul className="project__points">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <ul className="project__stack">
            {project.stack.map((s) => (
              <li key={s} className="chip chip--dark">{s}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a className="btn btn--rose" href={project.repo} target="_blank" rel="noreferrer">
              Voir le code sur GitHub
            </a>
            {project.demo && (
              <a className="btn btn--ghost-light" href={project.demo} target="_blank" rel="noreferrer">
                Essayer la démo
              </a>
            )}
          </div>
        </Reveal>

        <Reveal className="project__visual" delay={120}>
          <div className="mock">
            <div className="mock__bar"><i /><i /><i /></div>
            <div className="mock__body">
              <div className="mock__side">
                <span className="mock__label">Lieu</span>
                <span className="mock__field">Bordeaux</span>
                <span className="mock__label">Forme</span>
                <span className="mock__field">Cœur ♥</span>
                <span className="mock__label">Distance</span>
                <span className="mock__field">10 km</span>
                <span className="mock__go">Générer le GPX</span>
              </div>
              <svg className="mock__map" viewBox="0 0 300 260" aria-hidden="true">
                <g className="mock__streets">
                  <path d="M0 50 H300 M0 110 H300 M0 170 H300 M0 230 H300" />
                  <path d="M50 0 V260 M110 0 V260 M170 0 V260 M230 0 V260" />
                </g>
                <path
                  className="mock__route"
                  d="M150 225 C 65 170 35 130 35 95 C 35 62 62 44 92 44 C 118 44 138 58 150 78 C 162 58 182 44 208 44 C 238 44 265 62 265 95 C 265 130 235 170 150 225 Z"
                  pathLength="1"
                />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
