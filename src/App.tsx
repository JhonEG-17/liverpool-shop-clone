// Imports components

import Header from './components/Header'
import BannerSlider from './components/BannerSlider'
import CtaSlider from './components/CtaSlider'
import ProductOffersSlider from './components/ProductOffersSlider'
import BannerDiv from './components/BannerDiv'
import MosaicLinks from './components/MosaicLinks'
import BannerSmallDiv from './components/BannerSmallDiv'
import BannerMedium from './components/BannerMedium'

// Imports for resources

import BannerGamming from "@/assets/banners/gb_sec_rm_intel_010725.avif";
import BannerBackToSchool from "@/assets/banners/gb_sec_regreso-a-clases_260725.avif";
import BannerSecurity from "@/assets/banners/gb_sec_seguro-de-auto_010825.avif";
import BannerSmallDiv1 from "@/assets/banners/gb_sec_cintillo-gb_250725.avif";
import BannerMedium1 from '@/assets/banners/gb_sec_xtend_110725.avif';

// Mosaics
import mosaic1 from '@/assets/mosaicos-cards/gb_sec_celulares_300725_m.avif'
import mosaic2 from '@/assets/mosaicos-cards/gb_sec_smartwatch_250725_m.avif'
import mosaic3 from '@/assets/mosaicos-cards/gb_sec_tablets_250725_m.avif'
import mosaic4 from '@/assets/mosaicos-cards/gb_sec_audifonos_250725_m.avif'

import mosaic5 from '@/assets/mosaicos-cards/gb_sec_blusas_250725.avif'
import mosaic6 from '@/assets/mosaicos-cards/gb_sec_playeras_250725.avif'
import mosaic7 from '@/assets/mosaicos-cards/gb_sec_vestidos_250725.avif'

//  Import custom styles

import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <CtaSlider />
        <ProductOffersSlider />
        <BannerDiv image={BannerGamming} title={"Todo tu mundo gamer en un solo lugar"} subtitle={"Conoce más"} imageAlt='OMEN 16 + HyperX - Juega como los pros & OMEN 16-ah0003la - intel core ultra 9 32 gigas de ram 1 tera de ssd rtx 5080' />
        <MosaicLinks
          title='Tecnología para regreso a clases 📱'
          items={[
            {
              url: '#',
              itemTitle: 'Celulares',
              itemText: 'Hasta 30% de descuento',
              altImage: '',
              img: mosaic1,
            },
            {
              url: '#',
              itemTitle: 'Smartwatch',
              itemText: 'Hasta 20% de descuento',
              altImage: '',
              img: mosaic2,
            },
            {
              url: '#',
              itemTitle: 'Talets',
              itemText: 'Hasta 30% de descuento',
              altImage: '',
              img: mosaic3,
            },
            {
              url: '#',
              itemTitle: 'Audifonos',
              itemText: 'Hasta 30% de descuento',
              altImage: '',
              img: mosaic4,
            }
          ]}
        />
        <BannerSmallDiv url={BannerSmallDiv1} imageAlt='Gran barata hasta 60% de descuento + hasta 9 meses sin intereses' />
        <MosaicLinks
          title='Tecnología para regreso a clases 📱'
          items={[
            {
              url: '#',
              itemTitle: 'Blusas',
              itemText: 'Hasta 60% de descuento',
              altImage: '',
              img: mosaic5,
            },
            {
              url: '#',
              itemTitle: 'Playeras',
              itemText: 'Hasta 60% de descuento',
              altImage: '',
              img: mosaic6,
            },
            {
              url: '#',
              itemTitle: 'Vestidos',
              itemText: 'Hasta 60% de descuento',
              altImage: '',
              img: mosaic7,
            }
          ]}
        />
        <BannerSmallDiv url={BannerSmallDiv1} imageAlt='Gran barata hasta 60% de descuento + hasta 9 meses sin intereses' />
        <BannerDiv image={BannerBackToSchool} title={"Presume tu estilo en el salón de clases ✨"} subtitle={""} imageAlt='compra tu ropa para la vuelta al cole' />
        <ProductOffersSlider />
        <BannerMedium url='#' image={BannerMedium1} altImage='con xtend strena un iphone una y otra vezdesde 579 al mes con tarjetas liverpool' />
        <ProductOffersSlider />
        <BannerDiv image={BannerSecurity} title={""} subtitle={""} imageAlt='asegura tu auto con seguros liverpool' />
      </main>
    </>
  )
}

export default App
