import Link from "next/link";
import { AnimatedContainer } from "./AnimatedContainer";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string,
  text: string
}

export function AnimatedLink({ href, text }: AnimatedLinkProps) {
  return (
    <AnimatedContainer
      whileInHover={{ scale: 1.1, transition: { duration: 0.3 }, }}
      className={cn(
        "text-gray-600 text-lg hover:text-gray-300 transition-colors"
      )}
    >
      <Link href={href}>
        {text}
      </Link>
    </AnimatedContainer>
  )
}
