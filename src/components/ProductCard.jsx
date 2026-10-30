import { money } from '../data'
import Reveal from './Reveal'

export default function ProductCard({ product: p, wished, onAdd, onWish }) {
  return (
    <Reveal as="article" className="card">
      <div className="pi">
        <img src={p.img} alt={p.name} loading="lazy" />
        <span className={`tag ${p.tagClass}`}>{p.tag}</span>
        <button className={`wish${wished ? ' active' : ''}`} aria-label="Wishlist" onClick={() => onWish(p.id)}>
          {wished ? '♥' : '♡'}
        </button>
        <button className="qa" aria-label={`Add ${p.name} to cart`} onClick={() => onAdd(p)}>Quick add +</button>
      </div>
      <div className="pf">
        <h3>{p.name}</h3>
        <div className="pm">{p.color}</div>
        <div className="stars">★★★★★<small>({p.rating})</small></div>
        <div className="pr">
          <span className="price">{money(p.price)}</span>
          <span className="old">{money(p.old)}</span>
        </div>
      </div>
    </Reveal>
  )
}
