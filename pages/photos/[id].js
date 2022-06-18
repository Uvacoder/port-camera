import NavBar from '../../components/NavBar'

export default function Photo({photo}) {
  return (
    <div>
      <NavBar />
      <main>
        <img
          src={photo.url_to_photo}
          width={640}
          alt={photo.alt}
        />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const url = process.env.API_URL + "photos/"
  const myHeaders = {
      'Content-Type': 'application/json',
  }
  const res = await fetch(url, {
    method: 'GET',
    headers: myHeaders
  })
  const photos = await res.json()
  const paths = photos.map((photo) => ({
    params: { 
      id: photo.id.toString(),
    },
  }))

  return {
    paths, fallback: false
  }
}

export async function getStaticProps({params}) {
  const apiUrl = process.env.API_URL + "photos/" + params.id
  const res = await fetch(apiUrl, {
    method: 'GET',
  })
  const photo = await res.json()
  return {
    props: { photo }
  }
}
