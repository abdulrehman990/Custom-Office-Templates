import { reviews } from '../data'
import Reveal from './Reveal'

export default function Reviews() {
  return (
    <section className="sec container" id="about">
      <Reveal className="sh">
        <div>
          <h2>Loved by <em>thousands</em></h2>
          <p className="sub">Comfort and quality that speak for themselves.</p>
        </div>
        <a className="tl" href="#contact">Share your experience →</a>
      </Reveal>
      <div className="rev">
        {reviews.map((r) => (
          <Reveal as="article" className="rc" key={r.name}>
            <div className="stars">★★★★★</div>
            <q>{r.text}</q>
            <div className="who">
              <img src={r.avatar} alt={r.name} />
              <div><strong>{r.name}</strong><small>Verified customer</small></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
