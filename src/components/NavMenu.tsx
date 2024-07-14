'use client'

import { AnimatedLink } from "./AnimatedLink";

interface NavMenuProps {
  routes: {
    name: string;
    href: string;
  }[]
}

export function NavMenu({ routes }: NavMenuProps) {
  return (
    <nav className="w-full">
      <ul className="w-full flex justify-around">
        {routes.map((route, index) => <li key={index}>
          <AnimatedLink href={route.href} text={route.name} />
        </li>)}
      </ul>
    </nav>
  )
}
