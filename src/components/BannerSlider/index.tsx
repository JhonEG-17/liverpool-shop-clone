

import { useState } from 'react';
import heroLaps from '@/assets/banners/gb_hero_laptops_300725.avif';
import heroOfert from '@/assets/banners/gb_hero_ofertas-exclusivas-de_250725.avif';

import './index.css'

const banner = [
  heroLaps,
  heroOfert,
]

export default function BannerSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banner.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const handleNext = () => {
    const isLastSlide = currentIndex === banner.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className='relative w-full h-100 bg-gray-100 overflow-hidden mt-30'>
      <button onClick={handlePrev} className='absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 text-black bg-white/70 rounded-full hover:bgbutton shadow-lg'>&#10094;</button>
      <button onClick={handleNext} className='absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 text-black bg-white/70 rounded-full hover:bg-white shadow-lg'>&#10095;</button>

      <article className="w-full h-full overflow-hidden">
        <ul className="flex h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {banner.map((banner, index) => (
              <li key={index} className='w-full h-full flex-shrink-0'>
                <a href={"#"}>
                  <img className='w-full h-full object-cover' src={banner} alt={`banner ${index + 1}`} />
                </a>
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}