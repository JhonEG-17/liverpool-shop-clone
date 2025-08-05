type CardsProps = {
  url: string,
  image: string,
  imageAlt: string,
}

export default function Cards({ url, image, imageAlt }: CardsProps) {
  return(
    <a className="w-[100%] overflow-hidden" href={url} title={imageAlt} aria-label={imageAlt} tabIndex={0}>
      <img className="w-[100%] object-cover" src={image} alt={imageAlt}/>
    </a>
  );
}