// Imports components

import Header from './components/Header'
import BannerSlider from './components/BannerSlider'
import CtaSlider from './components/CtaSlider'
import ProductOffersSlider from './components/ProductOffersSlider'
import BannerDiv from './components/BannerDiv'
import MosaicLinks from './components/MosaicLinks'
import BannerMedium from './components/BannerMedium'
import BenefitsCards from './components/BenefitsCards'
import Footer from './components/Footer'

// Imports for resources

import BannerGamming from "@/assets/banners/gb_sec_rm_intel_010725.avif";
import BannerBackToSchool from "@/assets/banners/gb_sec_regreso-a-clases_260725.avif";
import BannerSecurity from "@/assets/banners/gb_sec_seguro-de-auto_010825.avif";
import BannerSmallDiv1 from "@/assets/banners/gb_sec_cintillo-gb_250725.avif";
import BannerMedium1 from '@/assets/banners/gb_sec_xtend_110725.avif';
import BannerSmallDiv2 from '@/assets/banners/bfcintillo_Pocket_0824.avif'

// Mosaics
import mosaic1 from '@/assets/mosaicos-cards/gb_sec_celulares_300725_m.avif'
import mosaic2 from '@/assets/mosaicos-cards/gb_sec_smartwatch_250725_m.avif'
import mosaic3 from '@/assets/mosaicos-cards/gb_sec_tablets_250725_m.avif'
import mosaic4 from '@/assets/mosaicos-cards/gb_sec_audifonos_250725_m.avif'

import mosaic5 from '@/assets/mosaicos-cards/gb_sec_blusas_250725.avif'
import mosaic6 from '@/assets/mosaicos-cards/gb_sec_playeras_250725.avif'
import mosaic7 from '@/assets/mosaicos-cards/gb_sec_vestidos_250725.avif'

import mosaic8 from '@/assets/mosaicos-cards/gb_sec_pantallas_250725.avif'
import mosaic9 from '@/assets/mosaicos-cards/gb_sec_cocina_250725.avif'

// Cards image imports

import card1 from '@/assets/cards/bfooter01_EnvioGratis_0824.avif'
import card2 from '@/assets/cards/bfooter02_ClickAndCollect_0824.avif'
import card3 from '@/assets/cards/bfooter03_Garantia_0824.avif'
import card4 from '@/assets/cards/bfooter04_Live_0824.avif'

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
        <BannerMedium url='#' image={BannerSmallDiv1} imageAlt='Gran barata hasta 60% de descuento + hasta 9 meses sin intereses' />
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
        <BannerMedium url='#' image={BannerSmallDiv1} imageAlt='Gran barata hasta 60% de descuento + hasta 9 meses sin intereses' />
        <BannerDiv image={BannerBackToSchool} title={"Presume tu estilo en el salón de clases ✨"} subtitle={""} imageAlt='compra tu ropa para la vuelta al cole' />
        <ProductOffersSlider />
        <BannerMedium url='#' image={BannerMedium1} imageAlt='con xtend strena un iphone una y otra vezdesde 579 al mes con tarjetas liverpool' />
        <MosaicLinks
          title='Equípate con lo mejor del momento'
          items={[
            {
              url: '#',
              itemTitle: 'Pantallas',
              itemText: 'Hasta 35% de descuento y paga en noviembre',
              altImage: '',
              img: mosaic8,
            },
            {
              url: '#',
              itemTitle: 'Cocina',
              itemText: 'Hasta 25% de descuento',
              altImage: '',
              img: mosaic9,
            }
          ]}
        />
        <ProductOffersSlider />
        <BannerDiv image={BannerSecurity} title={""} subtitle={""} imageAlt='asegura tu auto con seguros liverpool' />
        <BannerMedium url='#' image={BannerSmallDiv2} imageAlt='Descara la app loverpool pocket, utiliza el código (POCKETMENOS5) y obten un 5% de descuento adicional en tu primera compra' />
        <BenefitsCards Cards={[
          {
            url: '#',
            image: card1,
            imageAlt: '#',
          },
          {
            url: '#',
            image: card2,
            imageAlt: '#',
          },
          {
            url: '#',
            image: card3,
            imageAlt: '#',
          },
          {
            url: '#',
            image: card4,
            imageAlt: '#',
          },
        ]}/>
      </main>
      <Footer />
    </>
  )
}

export default App
