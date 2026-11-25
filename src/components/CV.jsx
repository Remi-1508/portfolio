import Reveal from './Reveal.jsx'
import { cvInfo, profile } from '../data.js'

export default function CV() {
  return (
    <section className="section section--soft" id="cv">
      <div className="container">
        <Reveal className="cv card">
          <div className="cv__text">
            <p className="eyebrow">Curriculum vitae</p>
            <h2 className="section__title section__title--sm">{cvInfo.title}</h2>
            <p>{cvInfo.text}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={profile.cv} target="_blank" rel="noreferrer">
                Ouvrir le CV<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a>
              <a className="btn btn--ghost" href={profile.cv} download="CV-Remi-Monier.pdf">
                Télécharger (PDF)
              </a>
            </div>
            <p className="cv__ats">
              <a href={profile.cvAts} target="_blank" rel="noreferrer">Version ATS (PDF sobre)<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a>
            </p>
          </div>

          <div className="cv__paper" aria-hidden="true">
            <span className="cv__line cv__line--title" />
            <span className="cv__line" />
            <span className="cv__line cv__line--short" />
            <span className="cv__gap" />
            <span className="cv__line" />
            <span className="cv__line" />
            <span className="cv__line cv__line--short" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
