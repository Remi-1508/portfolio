import Reveal from './Reveal.jsx'
import { project } from '../data.js'
import shot from '../assets/runtodraw-bordeaux.webp'

export default function Project() {
  return (
    <section className="section section--project" id="projet">
      <div className="container project">
        <Reveal className="project__intro">
          <p className="eyebrow">{project.kicker} · {project.name}</p>
          <h2 className="section__title">{project.title}</h2>
          <p className="project__text">{project.text}</p>
          <p className="project__note">
            <span aria-hidden="true">ℹ️</span> {project.note}
          </p>

          <ul className="project__points">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <ul className="project__stack">
            {project.stack.map((s) => (
              <li key={s} className="chip chip--white">{s}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a className="btn btn--primary" href={project.repo} target="_blank" rel="noreferrer">
              Voir le code sur GitHub
            </a>
            {project.demo && (
              <a className="btn btn--ghost" href={project.demo} target="_blank" rel="noreferrer">
                Essayer la démo
              </a>
            )}
          </div>
        </Reveal>

        <Reveal className="project__visual" delay={120}>
          <div className="mock">
            <div className="mock__bar"><i /><i /><i /></div>
            <img
              className="mock__shot"
              src={shot}
              width="931"
              height="695"
              loading="lazy"
              alt="Capture de RunToDraw : un cœur de 14,8 km tracé dans les rues de Bordeaux"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
