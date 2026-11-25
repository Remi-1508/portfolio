import { profile } from '../data.js'
import RunnerLoop from './RunnerLoop.jsx'

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
          <p className="status"><span className="status__dot" aria-hidden="true" />{profile.status}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">Me contacter</a>
            <a className="btn btn--ghost" href="#projet">Voir RunToDraw</a>
          </div>

          <ul className="hero__links">
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a></li>
            <li><a href={profile.cv} target="_blank" rel="noreferrer">CV<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span></a></li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__blob" />
          <RunnerLoop />
        </div>
      </div>
    </section>
  )
}
