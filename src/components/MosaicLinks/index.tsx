// Imports components

import MosaicCard from './MosaicCard'

// Import resources

import mosaic1 from '@/assets/mosaicos-cards/gb_sec_celulares_300725_m.avif'
import mosaic2 from '@/assets/mosaicos-cards/gb_sec_smartwatch_250725_m.avif'
import mosaic3 from '@/assets/mosaicos-cards/gb_sec_tablets_250725_m.avif'
import mosaic4 from '@/assets/mosaicos-cards/gb_sec_audifonos_250725_m.avif'


type MosaicLinksProps = {
  title: string,
}

const images = [
  mosaic1,
  mosaic2,
  mosaic3,
  mosaic4,
]

export default function MosaicLinks(props: MosaicLinksProps) {

  const { title } = props;

  return (
    <section className="column align-center justify-center w-full mt-4 mb-4 p-4">
      <h1 className="text-4xl font-semibold mb-4">
        {title}
      </h1>

      <article className={`grid gap-4 w-full ${images.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-3'}`}>
        {/* cards here */}
        <MosaicCard url={mosaic1} altImage={'ofertas de celualares de hasta el 30%'} title={'Celulares'} text={'hasta 30% de descuento'}/>
        <MosaicCard url={mosaic2} altImage={'ofertas de smartwatch de hasta el 20%'} title={'Smartwatch'} text={'hasta 20% de descuento'}/>
        <MosaicCard url={mosaic3} altImage={'ofertas de tablets de hasta el 30%'} title={'Tablets'} text={'hasta 30% de descuento'}/>
        <MosaicCard url={mosaic4} altImage={'ofertas de audifonos de hasta el 30%'} title={'Audifonos'} text={'hasta 30% de descuento'}/>
      </article>
    </section>
  );
}