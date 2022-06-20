import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../components/NavBar'

export async function getStaticProps() {
  const apiUrl = process.env.API_URL + "photos/"
  await fetch(apiUrl + "scan")
  const res = await fetch(apiUrl, {
    method: 'GET',
  })
  const photos = await res.json()
  return {
    props: { photos, apiUrl }
  }
}


export default function Photos({photos, apiUrl}) {
  return (
    <div>
      <Head>
        <title>Camera photos</title>
      </Head>

      <NavBar />

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
                    width="240px"
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

      <style jsx>{`
        h1 {text-align: center;}
      `}</style>
    </div>
  )
}
