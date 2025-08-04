type MosaicCardProps = {
  url: string,
  img: string, 
  altImage: string,
  title: string,
  text: string,
}

export default function MosaicCard({ url, img, altImage, title, text }: MosaicCardProps) {

  return (
    <a href={url} className="block w-full h-full overflow-hidden">
      <img className="object-cover w-full h-[70%] rounded-2xl" src={img} alt={altImage} />
      <h3 className="text-center text-xl md:text-2xl font-bold mt-4 mb-2">
        {title}
      </h3>
      <p className="text-center">
        {text}
      </p>
    </a>
  );
}