// Imports components

import Header from './components/Header'
import BannerSlider from './components/BannerSlider'
import CtaSlider from './components/CtaSlider'
import ProductOffersSlider from './components/ProductOffersSlider'
import BannerDiv from './components/BannerDiv'
import MosaicLinks from './components/MosaicLinks'
import BannerSmallDiv from './components/BannerSmallDiv'

// Imports for resources

import BannerGamming from "@/assets/banners/gb_sec_rm_intel_010725.avif";
import BannerBackToSchool from "@/assets/banners/gb_sec_regreso-a-clases_260725.avif";
import BannerSecurity from "@/assets/banners/gb_sec_seguro-de-auto_010825.avif";
import BannerSmallDiv1 from "@/assets/banners/gb_sec_cintillo-gb_250725.avif";

//  Import custom styles

import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <BannerSlider />
        <CtaSlider/>
        <ProductOffersSlider />
        <BannerDiv image={BannerGamming} title={"Todo tu mundo gamer en un solo lugar"} subtitle={"Conoce más"} imageAlt='OMEN 16 + HyperX - Juega como los pros & OMEN 16-ah0003la - intel core ultra 9 32 gigas de ram 1 tera de ssd rtx 5080' />
        <MosaicLinks title='Tecnología para regreso a clases 📱' />
        <BannerSmallDiv url={BannerSmallDiv1} imageAlt='Gran barata hasta 60% de descuento + hasta 9 meses sin intereses'/>
        <MosaicLinks title='Tecnología para regreso a clases 📱' />
        <BannerSmallDiv url={BannerSmallDiv1} imageAlt='Gran barata hasta 60% de descuento + hasta 9 meses sin intereses'/>
        <BannerDiv image={BannerBackToSchool} title={"Presume tu estilo en el salón de clases ✨"} subtitle={""} imageAlt='compra tu ropa para la vuelta al cole' />
        <ProductOffersSlider />
        <ProductOffersSlider />
        <BannerDiv image={BannerSecurity} title={""} subtitle={""} imageAlt='asegura tu auto con seguros liverpool' />
      </main>
    </>
  )
}

export default App
