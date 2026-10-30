export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="fg">
          <div className="brand">
            <a className="brand" href="#home">
              <div className="mark">S</div>
              <div className="bn">Salar <i>Textile</i></div>
            </a>
            <p>Thoughtfully selected towels that bring softness, quality and comfort to your everyday routine.</p>
            <div className="so">
              <a href="#contact" aria-label="Facebook">f</a>
              <a href="#contact" aria-label="Instagram">◎</a>
              <a href="#contact" aria-label="TikTok">♪</a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#shop">Shop all</a>
            <a href="#about">Reviews</a>
          </div>
          <div>
            <h4>Care</h4>
            <a href="#contact">Shipping</a>
            <a href="#contact">Returns</a>
            <a href="#contact">FAQs</a>
            <a href="#contact">Privacy</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+92 300 1234567</p>
            <p>hello@salartextile.pk</p>
            <p>Mon–Sat · 9 AM – 6 PM</p>
          </div>
        </div>
        <div className="cr">
          <span>© {new Date().getFullYear()} Salar Textile. All rights reserved.</span>
          <span>Premium towels · Better living</span>
        </div>
      </div>
      <div className="bigword" aria-hidden="true">Salar</div>
    </footer>
  )
}
