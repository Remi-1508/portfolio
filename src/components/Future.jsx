import Reveal from './Reveal.jsx'
import { future } from '../data.js'

export default function Future() {
  return (
    <section className="section section--tinted" id="avenir">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Mon projet d'avenir</p>
          <h2 className="section__title">{future.title}</h2>
          <p className="section__lead">{future.intro}</p>
        </Reveal>

        <div className="future__cards">
          {future.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="card future__card">
              <span className="future__emoji" aria-hidden="true">{c.emoji}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="timeline" as="ol" delay={100}>
          {future.timeline.map((t) => (
            <li key={t.when} className="timeline__item">
              <span className="timeline__when">{t.when}</span>
              <span className="timeline__what">{t.what}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
