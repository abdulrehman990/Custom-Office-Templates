import { useMemo, useRef, useState } from 'react'
import { products, money } from './data'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Categories from './components/Categories'
import Products from './components/Products'
import Promo from './components/Promo'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const scrollToShop = () => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })

export default function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState(() => new Set())
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')        // what is typed
  const [searchTerm, setSearchTerm] = useState('') // what is applied on submit
  const [sort, setSort] = useState('featured')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [toast, setToast] = useState({ text: '', show: false })
  const toastTimer = useRef(null)

  const showToast = (text) => {
    setToast({ text, show: true })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2600)
  }

  const visible = useMemo(() => {
    const list = products.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        `${p.name} ${p.category} ${p.color}`.toLowerCase().includes(searchTerm)
    )
    if (sort === 'low') list.sort((a, b) => a.price - b.price)
    if (sort === 'high') list.sort((a, b) => b.price - a.price)
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [category, searchTerm, sort])

  const addToCart = (p) => {
    setCart((c) => [...c, p])
    showToast(`${p.name} added to cart`)
  }

  const toggleWish = (id) => {
    const adding = !wishlist.has(id)
    setWishlist((prev) => {
      const next = new Set(prev)
      adding ? next.add(id) : next.delete(id)
      return next
    })
    showToast(adding ? 'Added to wishlist' : 'Removed from wishlist')
  }

  const selectCategory = (c) => {
    setCategory(c)
    scrollToShop()
  }

  const applySearch = () => {
    setSearchTerm(query.trim().toLowerCase())
    setCategory('All')
    setSearchOpen(false)
    scrollToShop()
  }

  const viewAll = () => {
    setCategory('All')
    setSearchTerm('')
    setQuery('')
  }

  const openCart = () => {
    if (!cart.length) return showToast('Your cart is empty. Add a towel to get started.')
    const total = cart.reduce((s, p) => s + p.price, 0)
    alert(
      `SALAR TEXTILE CART\n\n${cart.map((p) => `${p.name} — ${money(p.price)}`).join('\n')}\n\nTotal: ${money(total)}\n\nDemo only: checkout is not connected yet.`
    )
  }

  return (
    <>
      <AnnouncementBar />
      <Header
        cartCount={cart.length}
        query={query}
        onQueryChange={setQuery}
        onSearch={applySearch}
        onCartClick={openCart}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
      <main>
        <Hero />
        <Marquee />
        <Categories onSelect={selectCategory} />
        <Products
          list={visible}
          filtered={searchTerm !== '' || category !== 'All'}
          sort={sort}
          onSort={setSort}
          onViewAll={viewAll}
          wishlist={wishlist}
          onAdd={addToCart}
          onWish={toggleWish}
        />
        <Promo />
        <Reviews />
        <Newsletter onSubscribe={() => showToast('Thank you for subscribing! (Demo)')} />
      </main>
      <Footer />
      <div className={`toast${toast.show ? ' show' : ''}`} role="status">{toast.text}</div>
    </>
  )
}
