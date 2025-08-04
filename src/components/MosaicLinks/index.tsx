// Imports components

import MosaicCard from './MosaicCard'

// Import resources



type MosaicItems = {
  url: string,
  itemTitle: string,
  itemText: string,
  altImage: string,
  img: string,
}

type MosaicLinksProps = {
  title: string,
  items: MosaicItems[],
}

export default function MosaicLinks({ title, items }: MosaicLinksProps) {
  let gridColsClass = '';

  if (items.length === 1) {
    gridColsClass = 'grid-cols-1';
  } else if (items.length === 2) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2';
  } else if (items.length === 3) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  } else {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4';
  }

  return (
    <section className="flex flex-col items-center justify-center w-full mt-4 mb-4 p-4">
      <h1 className="text-4xl font-semibold mb-4">
        {title}
      </h1>

      <article className='flex items-center justify-center w-full h-full'>
        {/* cards here */}
        <ul className={`grid gap-4 items-center w-full h-full ${gridColsClass}`}>
          {items.map((item, index) => (
            <li key={index}>
              <MosaicCard
                url={item.url}
                img={item.img}
                altImage={item.altImage}
                title={item.itemTitle}
                text={item.itemText}
              />
            </li>
          ))
          }
        </ul>
      </article>
    </section>
  );
}