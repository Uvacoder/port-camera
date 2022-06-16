export default function Photo({params}) {
  return (
    <div>
        <img
          src={params.src}
          width={640}
          alt={params.alt}
        />
    </div>
  )
}

export async function getStaticPaths() {
  const url = process.env.API_URL
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
      id: photo.id,
      src: photo.url_to_photo,
      alt: photo.name
    },
  }))

  return {
    paths, fallback: false
  }
}
