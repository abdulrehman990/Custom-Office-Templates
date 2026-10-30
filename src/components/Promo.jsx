import Reveal from './Reveal'

export default function Promo() {
  return (
    <section className="container">
      <Reveal className="promo">
        <div className="pc">
          <p className="eb">Limited offer</p>
          <h2>Flat <em>20% off</em></h2>
          <p>On selected premium towel collections. Wrap yourself in comfort.</p>
          <a className="btn g" href="#shop">Shop the offer →</a>
        </div>
      </Reveal>
    </section>
  )
}
