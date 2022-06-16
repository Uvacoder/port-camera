import Head from 'next/head'
import Image from 'next/image'

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL
  const res = await fetch(apiUrl, {
    method: 'GET',
  })
  const videos = await res.json()
  return {
    props: { videos }
  }
}

export default function Videos({videos}) {
  return (
    <div>
      <Head>
        <title>Camera videos</title>
      </Head>

      <main>
        <h1>
          Videos
        </h1>
        <ul>
          {videos.map((video) => (
	    <li key={video.id}>
              <video width="300px">
  <source src={video.path_to_video} type="video/mp4">
              <video/>
            </li>
          ))}
        </ul>
      </main>

      <footer>
      </footer>
    </div>
  )
}
