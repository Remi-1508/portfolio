import Reveal from './Reveal.jsx'
import { contact, profile } from '../data.js'

export default function Contact() {
  return (
    <section className="section section--tinted" id="contact">
      <div className="container contact">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section__title">{contact.title}</h2>
          <p className="section__lead">{contact.text}</p>

          <div className="hero__actions hero__actions--center">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>M'écrire un e-mail</a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
