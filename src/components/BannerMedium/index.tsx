type BannerMediumProps = {
  url: string,
  image: string,
  altImage: string,
}

export default function BannerMedium(props: BannerMediumProps) {

  const { url, image, altImage } = props;

  return (
    <section className="flex align-center justify-center w-full mt-4 mb-4 px-4">
      <a href={url}>
        <img className="object-contain h-100" src={image} alt={altImage} />
      </a>
    </section>
  );
}