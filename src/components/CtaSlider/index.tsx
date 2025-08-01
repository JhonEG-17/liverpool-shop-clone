import { useState } from "react";

const messages = [
  "Aprovecha los beneficios exclusivos que te ofrecentus Tarjetas Liverpool.",
  "Conoce nuestro servicio de diseño de interiores.Ver más",
  "Descarga Liverpool pocket y obtén5% en tu primera compraen APP conPOCKETMENOS5",
  "Envío gratis en todas tus compras.",
  "Click & Collect compra en línea y recoge en tienda o desde tu auto hasta en 2 hrs.",
  "Con Garantía Liverpool tienes devoluciones sin condiciones.",
];

const link = [
  "ver más"
];

export default function CtaSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? messages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const isLastItem = currentIndex === messages.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className="relative w-full bg-white text-black mt-4 mb-4">
      <button onClick={handlePrev} className='absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 text-black bg-white/70 rounded-full hover:bgbutton shadow-lg'>&#10094;</button>
      <button onClick={handleNext} className='absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 text-black bg-white/70 rounded-full hover:bg-white shadow-lg'>&#10095;</button>

      <article className="w-full h-full overflow-hidden p-4">
        <ul className="flex h-hull transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
          {messages.map((messages, index) => (
              <li key={index} className="w-full h-full flex-shrink-0 text-center"><p className="w-full">{messages} <a href="#"><b className="text-pink-500">{link}</b></a></p></li>
            ))
          };
        </ul>
      </article>
    </section>
  );
}