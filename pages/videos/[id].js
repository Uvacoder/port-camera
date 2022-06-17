import NavBar from '../../components/NavBar'

export default function Video({video}) {
  return (
    <div>
      <NavBar />
      <main>
        <video width="320" height="240" controls>
          <source src={video.url_to_video} type="video/mp4" />
        </video>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const url = process.env.API_URL + "videos/"
  const myHeaders = {
      'Content-Type': 'application/json',
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: myHeaders
  })
  const videos = await res.json()
  const paths = videos.map((video) => ({
    params: { 
      id: video.id.toString(),
    },
  }))

  return {
    paths, fallback: false
  }
}

export async function getStaticProps({params}) {
  const apiUrl = process.env.API_URL + "videos/" + params.id
  const res = await fetch(apiUrl, {
    method: 'GET',
  })
  const video = await res.json()
  return {
    props: { video }
  }
}
