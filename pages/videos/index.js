import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../../components/NavBar'

export async function getStaticProps() {
  const apiUrl = process.env.API_URL + "videos/"
  await fetch(apiUrl + "scan")
  const res = await fetch(apiUrl, {
    method: 'GET',
  })
  const videos = await res.json()
  return {
    props: { videos, apiUrl }
  }
}


export default function Videos({videos, apiUrl}) {
  return (
    <div>
      <Head>
        <title>Camera videos</title>
      </Head>

      <NavBar />

      <main>
        <h1>
          Videos
        </h1>
        <ul>
          {videos.map((video) => (
	    <li key={video.id}>
              <Link href={`/videos/${encodeURIComponent(video.id)}`}>
                <a>
		  {video.name}
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
