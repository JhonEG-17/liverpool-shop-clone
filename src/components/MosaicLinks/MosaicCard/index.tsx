type MosaicCardProps = {
  url: string,
  altImage: string,
  title: string,
  text: string,
}

export default function MosaicCard(props: MosaicCardProps) {

  const { url, altImage, title, text } = props

  return (
    <div className="w-full h-full overflow-hidden">
      <img className="object-cover w-full h-9/10 rounded-2xl" src={url} alt={altImage} />
      <h3 className="mt-4 mb-2">
        {title}
      </h3>
      <p className="">
        {text}
      </p>
    </div>
  );
}