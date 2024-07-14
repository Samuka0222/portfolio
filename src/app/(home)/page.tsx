'use client'

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { NavMenu } from "@/components/NavMenu";
import { SocialLinks } from "@/components/SocialLinks";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { delay } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const routes = [
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
  ]

  return (
    <div className="w-full h-full mt-20 flex flex-col justify-center items-center px-5">

      <header className="w-full flex flex-col justify-center items-center">
        <AnimatedContainer className="text-gray-300 text-3xl text-center">
          <h1>
            Olá, eu sou o Samuel!
          </h1>
        </AnimatedContainer>

        <div className="w-full mt-8">
          <AnimatedContainer
            className="w-full flex justify-center items-center"
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.8,
              type: "tween"
            }}
          >
            <Image
              src='https://github.com/samuka0222.png'
              alt="minha foto"
              height={150}
              width={150}
              className="rounded-full ring-white ring-2"
            />
          </AnimatedContainer>
        </div>

        <AnimatedContainer
          initial={{ opacity: 0 }}
          animation={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-gray-300 text-xl mt-5 text-center">
          Desenvolvedor Full-Stack
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ opacity: 0 }}
          animation={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-gray-300 text-xl mt-5 text-center">
          <SocialLinks />
        </AnimatedContainer>

        <div className="w-full">
          <AnimatedContainer
            initial={{ opacity: 0 }}
            animation={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full text-gray-300 text-xl mt-5 bg-black/50 py-3 rounded-lg flex justify-center">
            <TextGenerateEffect
              words="Sou um jovem programador Full-stack focado em Javascript e estou a procura do meu primeiro emprego na área. Sou proativo, dinâmico, responsável, tenho facilidade em aprender e sempre disposto a encarar novos desafios."
              className="w-full text-lg text-justify"
            />
          </AnimatedContainer>
        </div>

        <AnimatedContainer
          className="w-full mt-5"
        >
          <NavMenu routes={routes} />
        </AnimatedContainer>

      </header>

      <AnimatedContainer
        className="w-full"
        initial={{ x: 500 }}
        animation={{ x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <section id="#about" className="w-full mt-10">
          <h2 className="text-white text-3xl flex items-center gap-1">
            <ChevronsRight size={30} className="mt-1" />
            Sobre
          </h2>

          <p className="text-lg text-white font-medium mt-5 indent-8 text-justify">
            Em 2019, quando eu era da área do Audiovisual e trabalhava como assistente administrativo para uma plataforma de curso de inglês. Sendo responsável por alertar e sugerir melhorias no site, comecei a ter um pingo de interesse pelo desenvolvimento Web.
          </p>
          <p className="text-lg text-white font-medium mt-5 indent-8 text-justify">
            Em 2023, após ficar um tempo desempregado, decidi que chutar o balde e começar a estudar programação e mesmo sem conhecimento nenhum da área, um nome estava na minha cabeça: &ldquo;Javascript&rdquo;.
          </p>
          <p className="text-lg text-white font-medium mt-5 indent-8 text-justify">
            Agora sou um jovem programador Full-stack focado em Javascript e estou a procura do meu primeiro emprego na área. Sou proativo, dinâmico, responsável, tenho facilidade em aprender e sempre disposto a encarar novos desafios.
          </p>
        </section>
      </AnimatedContainer>
    </div>
  );
}
