import ProductCard from './ProductCard'
import Reveal from './Reveal'

export default function Products({ list, filtered, sort, onSort, onViewAll, wishlist, onAdd, onWish }) {
  return (
    <section className="sec container" id="shop">
      <Reveal className="sh">
        <div>
          <h2>Featured <em>products</em></h2>
          <p className="sub">Everyday essentials, made extra comfortable.</p>
        </div>
        <a className="tl" href="#shop" onClick={onViewAll}>View all products →</a>
      </Reveal>

      <div className="tb">
        <p>{filtered ? `Showing ${list.length} matching product(s)` : 'Showing our best sellers'}</p>
        <select aria-label="Sort" value={sort} onChange={(e) => onSort(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <div className="grid">
        {list.length ? (
          list.map((p) => (
            <ProductCard key={p.id} product={p} wished={wishlist.has(p.id)} onAdd={onAdd} onWish={onWish} />
          ))
        ) : (
          <div className="empty">No towels found. Try another search or category.</div>
        )}
      </div>
    </section>
  )
}
