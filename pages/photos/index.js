import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  const apiUrl = process.env.API_URL
  const res = await fetch(apiUrl, {
    method: 'GET',
  })
  const photos = await res.json()
  return {
    props: { photos }
  }
}

export default function Photos({photos}) {
  return (
    <div>
      <Head>
        <title>Camera photos</title>
      </Head>

      <main>
        <h1>
          Photos
        </h1>
        <ul>
          {photos.map((photo) => (
	    <li key={photo.id}>
              <Link href={`/photos/${encodeURIComponent(photo.id)}`}>
                <a>
                  <img
                    src={photo.url_to_thumbnail}
                    width="380px"
                    alt={photo.name}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer>
      </footer>
    </div>
  )
}
