import Photo from '../components/photo'
import Link from 'next/link'

export default function Thumbnail({src, width, alt, href}) {
  return (
    <Link href={href}>
      <a>
        <img
          src={src}
          width={width}
          alt={alt}
        />
      </a>
    </Link>
  )
}
