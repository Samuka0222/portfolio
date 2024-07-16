'use client'

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation"

export function ToggleLanguage() {
  const router = useRouter();
  const pathName = usePathname();

  console.log(pathName)

  const setPortugueseAction = () => {
    router.push('/')
  }

  const setEnglishAction = () => {
    router.push('/en')
  }

  return (
    <div className="w-[200px] flex justify-between text-white mt-8">
      <button
        className={cn(
          pathName === '/'
            ? "w-2/4 p-2 bg-gray-300 rounded-l-full border-r border-secondary text-gray-700 font-bold"
            : "w-2/4 p-2 bg-gray-700 rounded-l-full border-r border-secondary text-gray-300 font-bold"
        )}
        onClick={setPortugueseAction}
      >
        PT-BR
      </button>
      <button
        className={cn(
          pathName === '/en'
            ? "w-2/4 p-2 bg-gray-300 rounded-r-full border-l border-secondary text-gray-700 font-bold"
            : "w-2/4 p-2 bg-gray-700 rounded-r-full border-l border-secondary text-gray-300 font-bold"
        )}
        onClick={setEnglishAction}
      >
        EN
      </button>
    </div>
  )
}
