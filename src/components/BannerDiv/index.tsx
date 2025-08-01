export default function BanerDiv (props: BannerDivProps) {

  const { image, title, subtitle, imageAlt } = props;

  return (
    <section className="column align-center justify-center w-full h-full mt-4 mb-4 p-4">
      <h2 className="text-3xl font-semibold mb-2">
        {title}
      </h2>
      <h3 className="text-4xl font-light mb-4">
        {subtitle}
      </h3>

      <article className="w-full h-full">
        <img className="w-full h-full object-cover" src={image} alt={imageAlt} />
      </article>
    </section>
  );
}

type BannerDivProps = {
  title: string,
  subtitle: string,
  image: string,
  imageAlt: string,
}