import { categories } from '../data'
import Reveal from './Reveal'

export default function Categories({ onSelect }) {
  return (
    <section className="sec container" id="categories">
      <Reveal className="sh">
        <div>
          <h2>Shop by <em>category</em></h2>
          <p className="sub">Find the perfect towel for every moment.</p>
        </div>
        <a className="tl" href="#shop">View all →</a>
      </Reveal>
      <div className="cats">
        {categories.map((c) => (
          <Reveal
            as="article"
            key={c.filter}
            className="cat"
            tabIndex={0}
            onClick={() => onSelect(c.filter)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect(c.filter)
              }
            }}
          >
            <div className="im"><img src={c.img} alt={c.name} loading="lazy" /></div>
            <div className="ci"><strong>{c.name}</strong><span>→</span></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
