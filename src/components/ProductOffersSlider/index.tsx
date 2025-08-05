import { useState, useMemo, useEffect } from "react";
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
];

function useItemsPerPage() {
  const get = () => {
    if (typeof window === "undefined") return 5;
    const w = window.innerWidth;
    if (w < 768) return 1; // móvil
    if (w < 1024) return 3; // tablet
    return 5; // escritorio
  };

  const [itemsPerPage, setItemsPerPage] = useState(get);

  useEffect(() => {
    let raf: number;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setItemsPerPage(get());
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return itemsPerPage;
}

export default function ProductOffersSlider() {
  const itemsPerPage = useItemsPerPage();

  const pages = useMemo(() => {
    const chunks: typeof products[] = [];
    for (let i = 0; i < products.length; i += itemsPerPage) {
      chunks.push(products.slice(i, i + itemsPerPage));
    }
    return chunks;
  }, [itemsPerPage]);

  const totalPages = pages.length;
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page >= totalPages) {
      setPage(0);
    }
  }, [totalPages, page]);

  const handlePrev = () => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setPage((p) => (p + 1) % totalPages);
  };

  return (
    <section className="flex flex-col w-full mt-4 mb-4 px-4">
      <header className="flex justify-between items-center w-full mb-4">
        <h2 className="text-2xl font-bold">
          Hasta 48% de descuento en colchones
        </h2>
        <a href="#" className="text-pink-500 text-sm font-medium">
          Ver más &#10095;
        </a>
      </header>

      <div className="relative overflow-hidden w-full">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-3 text-black rounded-full bg-white/70 hover:bg-white shadow-lg"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-3 text-black rounded-full bg-white/70 hover:bg-white shadow-lg"
        >
          &#10095;
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${totalPages * 100}%`,
            transform: `translateX(-${(page * 100) / totalPages}%)`,
          }}
        >
          {pages.map((chunk, idx) => (
            <ul
              key={idx}
              className="flex justify-center flex-shrink-0 w-full"
              style={{ width: `${100 / totalPages}%` }}
            >
              <li
                className={`grid gap-4 ${itemsPerPage === 1
                    ? "grid-cols-1 justify-center"
                    : itemsPerPage === 3
                      ? "grid-cols-1 sm:grid-cols-3"
                      : "grid-cols-5"
                  }`}
              >

                {chunk.map((product) => (
                  <div key={product.id} className="max-w-[16rem]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full object-cover rounded"
                    />
                    <p className="text-center">{product.description}</p>
                    <p className="text-center text-red-500 font-semibold">
                      {product.actualy_prices}
                    </p>
                    <p className="text-center">
                      <small>{product.before_prices}</small>
                    </p>
                  </div>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
