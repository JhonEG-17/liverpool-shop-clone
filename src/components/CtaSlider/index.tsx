import { useState } from "react";

const messages = [
  "Aprovecha los beneficios exclusivos que te ofrecentus Tarjetas Liverpool.",
  "Conoce nuestro servicio de diseño de interiores.Ver más",
  "Descarga Liverpool pocket y obtén5% en tu primera compraen APP conPOCKETMENOS5",
  "Envío gratis en todas tus compras.",
  "Click & Collect compra en línea y recoge en tienda o desde tu auto hasta en 2 hrs.",
  "Con Garantía Liverpool tienes devoluciones sin condiciones.",
];

export default function CtaSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isBeforeItem = currentIndex === messages.length - 1;
    const prev = isBeforeItem ? 0 : currentIndex - 1;
    setCurrentIndex(prev)
  }

  return (
    <section className="relative w-full bg-white text-black">
      <button onClick={handlePrev}>&#10094;</button>
      <button>&#10095;</button>

      <article>
        <ul>
          {messages.map((messages, index) => (
              <li key={index}>{messages}</li>
            ))
          };
        </ul>
      </article>
    </section>
  );
}