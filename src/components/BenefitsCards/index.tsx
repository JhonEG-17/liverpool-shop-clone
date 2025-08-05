// Imports components

import CardBenefit from "./CardBenefit";

type Cards = {
  url: string,
  image: string,
  imageAlt: string,
}

type BenefitsCardsProps = {
  Cards: Cards[],
}

export default function BenefitsCards({ Cards }: BenefitsCardsProps) {
  return (
    <section className="block items-center justify-center w-full mt-4 mb-4 px-4">
      <h2 className="text-3xl font-semibold mb-4">Benefiios Liverpool</h2>

      <article className="w-full">
        <ul className="flex flex-wrap items-center justify-center lg:justify-between w-full">
          {Cards.map((Card, index) => (
              <li key={index} className="max-w-[19rem]"> <CardBenefit url={Card.url} image={Card.image} imageAlt={Card.imageAlt} /></li>
            ))
          }
        </ul>
      </article>
    </section>
  );
}