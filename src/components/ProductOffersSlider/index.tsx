import { useState } from "react";
import image1 from "@/assets/products/11.avif";
import image2 from "@/assets/products/10.avif";
import image3 from "@/assets/products/9.avif";
import image4 from "@/assets/products/8.avif";
import image5 from "@/assets/products/7.avif";
import image6 from "@/assets/products/6.avif";
import image7 from "@/assets/products/5.avif";
import image8 from "@/assets/products/4.avif";
import image9 from "@/assets/products/3.avif";
import image10 from "@/assets/products/2.avif";
import image11 from "@/assets/products/1.avif";

const products = [
  {
    id: "1",
    image: image1,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "2",
    image: image2,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "3",
    image: image3,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "4",
    image: image4,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "5",
    image: image5,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "6",
    image: image6,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "7",
    image: image7,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "8",
    image: image8,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "9",
    image: image9,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "10",
    image: image10,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
  {
    id: "11",
    image: image11,
    name: "Colchón regular Performance confort medio",
    description: "Colchón regular Performance confort medio",
    actualy_prices: "$3,639.48 - $6,551.48",
    before_prices: "$6,999.00 - $12,999.00",
  },
]

export default function ProductOffersSlider () {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsPerPage = 5;

  const handlePrev = () => {
    const nextIndex = currentIndex + itemsPerPage
    setCurrentIndex(nextIndex >= products.length ? 0 : nextIndex)
  }

  const handleNext = () => {
    const prevIndex = currentIndex - itemsPerPage
    setCurrentIndex(prevIndex < 0 ? products.length - itemsPerPage : prevIndex)
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage)

  const fullProducts = visibleProducts.length < itemsPerPage
      ? [...visibleProducts, ...products.slice(0, itemsPerPage - visibleProducts.length)]
      : visibleProducts
  return (
    <section className="column align-center justify-center w-full h-full">
      <header className="flex align-center justify-between w-full h-full p-4">
        <h2 className="text-2xl w-full text-left">
          <b className="w-100">Hata 48% de descuento en colchones</b>
        </h2>
        <a href="#" className="text-pink-500 text-[1rem] font-medium w-100 text-right">Ver más &#10095;</a>
      </header>

      <article className="relative w-full h-full">
        {/* Slider here */}
        <button onClick={handlePrev} className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 text-black rounded-full bg-white/70 hover:bg-white shadow-lg">&#10094;</button>
        <button onClick={handleNext} className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 text-black rounded-full bg-white/70 hover:bg-white shadow-lg">&#10095;</button>

        <ul className="grid grid-cols-5 gap-4 p-5">
          {
            fullProducts.map((product) => (
             <li key={product.id} className="max-w-[16rem]">
                <div>
                  <img src={product.image} alt={product.name} />
                  <p className="text-center flex-wrap">{product.description}</p>
                  <p className="text-center text-red-500 font-semibold">{product.actualy_prices}</p>
                  <p className="text-center"><small>{product.before_prices}</small></p>
                </div>
             </li>
            ))
          }
        </ul>
      </article>
    </section>
  );
}