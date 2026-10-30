import { announcements } from '../data'

export default function AnnouncementBar() {
  // Two identical halves (4 repeats each) so the -50% loop is seamless.
  const half = Array.from({ length: 4 }, () => announcements).flat()
  const items = [...half, ...half]
  return (
    <div className="announce">
      <div className="at">
        {items.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  )
}
