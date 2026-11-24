import Reveal from './Reveal.jsx'
import { skills, languages } from '../data.js'

export default function Skills() {
  return (
    <section className="section" id="competences">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Compétences</p>
          <h2 className="section__title">Ce que je sais faire, et avec quoi.</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 70} className="card skill">
              <h3 className="skill__title">{group.title}</h3>
              <ul className="skill__chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={skills.length * 70} className="card skill skill--langs">
            <h3 className="skill__title">Langues</h3>
            <ul className="langs">
              {languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
