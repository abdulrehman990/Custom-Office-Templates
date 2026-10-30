import { useEffect, useRef } from 'react'
import { navLinks } from '../data'

export default function Header({ cartCount, query, onQueryChange, onSearch, onCartClick, menuOpen, setMenuOpen, searchOpen, setSearchOpen }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  const submit = (e) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <header>
      <div className="container">
        <div className="nav">
          <a className="brand" href="#home">
            <div className="mark">S</div>
            <div className="bn">Salar <i>Textile</i></div>
          </a>

          <nav className={`links${menuOpen ? ' open' : ''}`}>
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} className={i === 0 ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="acts">
            <form className={`search${searchOpen ? ' open' : ''}`} onSubmit={submit}>
              <input
                ref={inputRef}
                type="search"
                placeholder="Search towels…"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
              />
              <button aria-label="Search">⌕</button>
            </form>
            <button
              className="ib st"
              aria-label="Search"
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen(!searchOpen)
              }}
            >
              ⌕
            </button>
            <button
              className="ib mt"
              aria-label="Menu"
              onClick={() => {
                setSearchOpen(false)
                setMenuOpen(!menuOpen)
              }}
            >
              ☰
            </button>
            <button className="ib" aria-label="Cart" onClick={onCartClick}>
              🛍<span className="cc">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
