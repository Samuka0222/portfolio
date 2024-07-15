'use client'

import Image from "next/image";

interface TechStackCardProps {
  items: {
    id: string;
    image: string;
  }[]
}

export function TechStackCard({ items }: TechStackCardProps) {
  return (
    <div className="w-full">
      <div className="w-full border-b border-white py-3 rounded-xl">
        <ul className="w-full mt-3 flex justify-around">
          {
            items.map(item => (
              <li
                key={item.id}
              >
                <Image
                  src={item.image}
                  alt={item.id}
                  height={35}
                  width={35}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
