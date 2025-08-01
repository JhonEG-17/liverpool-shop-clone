type BannerSmallDivProps = {
  url: string,
  imageAlt: string;
}

export default function BannerSmallDiv(props: BannerSmallDivProps) {

  const { url, imageAlt } = props

  return (
    <section className="flex w-full max-h-[7rem]">
      <img className="w-full max-h-[7rem] object-cover" src={url} alt={imageAlt} />
    </section>
  );
}