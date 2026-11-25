import Reveal from './Reveal.jsx'
import { about } from '../data.js'

export default function About() {
  return (
    <section className="section section--soft" id="apropos">
      <div className="container">
        <Reveal>
          <p className="eyebrow">À propos</p>
          <h2 className="section__title">{about.title}</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__text" delay={80}>
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <div className="about__facts">
            {about.facts.map((f, i) => (
              <Reveal key={f.label} delay={120 + i * 80} className="card fact">
                <span className="fact__label">{f.label}</span>
                <strong className="fact__value">{f.value}</strong>
                <span className="fact__sub">{f.sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
