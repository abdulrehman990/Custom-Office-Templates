import Reveal from './Reveal'

export default function Newsletter({ onSubscribe }) {
  return (
    <section className="nl">
      <Reveal className="container">
        <h2>Stay in the <em>loop</em></h2>
        <p>New arrivals, private offers and towel-care tips — straight to your inbox.</p>
        <form
          className="sf"
          onSubmit={(e) => {
            e.preventDefault()
            onSubscribe()
            e.currentTarget.reset()
          }}
        >
          <input type="email" placeholder="Your email address" required />
          <button className="btn g" type="submit">Subscribe</button>
        </form>
      </Reveal>
    </section>
  )
}
