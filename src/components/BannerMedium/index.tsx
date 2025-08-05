type BannerMediumProps = {
  url: string,
  image: string,
  imageAlt: string,
}

export default function BannerMedium({ url, image, imageAlt }: BannerMediumProps) {

  return (
    <section className="block align-center justify-center w-full mt-4 mb-4 px-4">
      <a href={url}>
        <img className="object-contain w-full" src={image} alt={imageAlt} />
      </a>
    </section>
  );
}