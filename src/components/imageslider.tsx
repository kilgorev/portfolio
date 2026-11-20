import { Link } from 'react-router-dom'

export type SlideItem = {
  url: string
  title: string
  caption: string
  link: string
}

type Props = {
  items: SlideItem[]
}

export default function ImageSlider({ items }: Props) {
  const [featured, ...rest] = items
  if (!featured) return null

  return (
    <div className="project-grid">
      <Link to={featured.link} className="project-card featured">
        <img src={featured.url} alt={featured.title} loading="lazy" decoding="async" />
        <h3>{featured.title}</h3>
        <p>{featured.caption}</p>
      </Link>

      {rest.length > 0 && (
        <div className="project-row">
          {rest.map((item) => (
            <Link key={item.link} to={item.link} className="project-card">
              <img src={item.url} alt={item.title} loading="lazy" decoding="async" />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}