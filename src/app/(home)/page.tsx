'use client'

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { NavMenu } from "@/components/NavMenu";
import { SocialLinks } from "@/components/SocialLinks";
import { TechStackCard } from "@/components/TechStackCard";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { ChevronRight, ChevronsRight } from "lucide-react";
import { techStackItems } from "@/lib/techStackItems";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsPT } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  const routes = [
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
  ];

  return (
    <div className="w-full h-full relative mt-20 lg:mt-5 flex flex-col lg:flex-row justify-center lg:justify-end lg:items-start lg:gap-32 px-5 md:px-16 pb-6">

      <header className="w-full lg:w-[40%] lg:h-full lg:fixed left-0 flex flex-col justify-center lg:justify-start items-center xl:ml-20 lg:mt-32">
        <AnimatedContainer className="text-white font-bold text-3xl text-center">
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

        <div className="w-[80%]">
          <AnimatedContainer
            initial={{ opacity: 0 }}
            animation={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full text-gray-300 text-xl my-6 rounded-lg flex justify-center">
            <TextGenerateEffect
              words="Eu gosto de criar coisas exageradas que podem lhe incomodar."
              className="w-full text-lg text-center"
            />
          </AnimatedContainer>
        </div>

        <AnimatedContainer
          className="w-full mt-5"
        >
          <NavMenu routes={routes} />
        </AnimatedContainer>

        <AnimatedContainer
          initial={{ opacity: 0 }}
          animation={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="w-full mt-5"
        >
          <div className="w-full flex justify-center items-center mt-10">
            <Link
              className="rounded-xl bg-primary py-3 px-6 text-white font-medium text-lg lg:text-base hover:bg-secondary hover:text-foreground"
              href='https://drive.google.com/file/d/1ahZ8o5QTcTYhdHwI7OvDMxv9EqnVkDE2/view?usp=sharing'
              target="_blank"
            >
              Ver Currículo
            </Link>
          </div>
        </AnimatedContainer>

      </header>

      <main className="w-full lg:w-[40%] flex flex-col justify-center items-center lg:items-start xl:mr-24">
        <AnimatedContainer className="w-full"
          initial={{ opacity: 0 }}
          animation={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >

          <section id="about" className="w-full mt-24 lg:mt-10">
            <h2 className="text-white text-3xl font-bold flex items-center gap-1">
              <ChevronsRight size={30} className="mt-1" />
              Sobre
            </h2>

            <p className="text-base text-white font-medium mt-5 indent-8 text-justify">
              Em 2019, quando eu era da área do Audiovisual e trabalhava como assistente administrativo para uma plataforma de curso de inglês. Sendo responsável por alertar e sugerir melhorias no site, comecei a ter um pingo de interesse pelo desenvolvimento Web.
            </p>
            <p className="text-base text-white font-medium mt-5 indent-8 text-justify">
              Em 2023, após ficar um tempo desempregado, decidi chutar o balde e começar a estudar programação e mesmo sem conhecimento nenhum da área, um nome estava na minha cabeça: &ldquo;Javascript&rdquo;.
            </p>
            <p className="text-base text-white font-medium mt-5 indent-8 text-justify">
              Agora sou um jovem programador Full-stack focado em Javascript e estou a procura do meu primeiro emprego na área. Sou proativo, dinâmico, responsável, tenho gosto pelo desenvolvimento contínuo ou constante desenvolvimento pessoal.
            </p>
          </section>

          <section id="skills" className="w-full mt-24">
            <h2 className="text-white font-bold text-3xl flex items-center gap-1">
              <ChevronsRight size={30} className="mt-1" />
              Habilidades
            </h2>

            <div className="w-full flex flex-col justify-center items-center mt-10">
              <h3 className="text-center text-xl font-medium text-white">Minha TechStack Atual</h3>
              <TechStackCard items={techStackItems} />
            </div>

            <div className="w-full justify-center items-center mt-10">
              <h3 className="text-center lg:text-start text-xl font-medium text-white">Outras habilidades</h3>
              <ul className="w-full flex flex-col gap-2 mt-4">
                <li className="text-base text-white flex"><ChevronRight /> Serverless com AWS</li>
                <li className="text-base text-white flex"><ChevronRight /> PrismaORM</li>
                <li className="text-base text-white flex"><ChevronRight /> DynamoDB</li>
                <li className="text-base text-white flex"><ChevronRight /> MongoDB</li>
                <li className="text-base text-white flex"><ChevronRight /> SQLite</li>
                <li className="text-base text-white flex"><ChevronRight /> React Native</li>
              </ul>
            </div>
          </section>

          <section id="projects" className="w-full mt-24">
            <h2 className="text-white text-3xl font-bold flex items-center gap-1">
              <ChevronsRight size={30} className="mt-1" />
              Projetos
            </h2>

            <div className="w-full justify-center flex flex-col items-center mt-10 gap-4">
              {
                projectsPT.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                  />
                ))
              }
            </div>
          </section>

        </AnimatedContainer>
      </main>
    </div>
  );
}
