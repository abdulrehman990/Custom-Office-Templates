import { marqueeWords } from '../data'

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="track">
        {[0, 1].map((n) =>
          marqueeWords.map((w) => (
            <span key={`${n}-${w}`} style={{ display: 'contents' }}>
              <span>{w}</span>
              <span>✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  )
}
