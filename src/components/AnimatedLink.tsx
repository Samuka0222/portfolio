'use client'

import Link from "next/link";
import { AnimatedContainer } from "./AnimatedContainer";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AnimatedLinkProps {
  href: string,
  text: string
}

export function AnimatedLink({ href, text }: AnimatedLinkProps) {
  return (
    <AnimatedContainer
      whileInHover={{ scale: 1.1, transition: { duration: 0.3 }, }}
      className={cn(
        "text-gray-600 text-lg hover:text-white font-medium transition-colors"
      )}
    >
      <Link href={href}>
        {text}
      </Link>
    </AnimatedContainer>
  )
}
