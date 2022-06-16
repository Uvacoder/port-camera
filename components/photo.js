export default function Photo({src, width, alt}) {
  return (
    <div>
        <img
          src={src}
          width={width}
          alt={alt}
        />
    </div>
  )
}
