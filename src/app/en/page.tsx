'use client'

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { NavMenu } from "@/components/NavMenu";
import { SocialLinks } from "@/components/SocialLinks";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { ChevronRight, ChevronsRight } from "lucide-react";
import { backTechStackItems, frontTechStackItems } from "@/lib/techStackItems";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsEN } from "@/lib/projects";
import Link from "next/link";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  const routes = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <div className="w-full h-full relative mt-20 lg:mt-5 flex flex-col lg:flex-row justify-center lg:justify-end lg:items-start lg:gap-32 px-5 md:px-16 pb-6">

      <header className="w-full lg:w-[40%] lg:h-full lg:fixed left-0 flex flex-col justify-center lg:justify-start items-center xl:ml-20 lg:mt-32">
        <AnimatedContainer className="text-white font-bold text-3xl text-center">
          <h1>
            Hi there, I am Samuel!
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
          Full-Stack Developer
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
              words="I like to create exaggerated things that might annoy you."
              className="w-full text-lg text-center"
            />
          </AnimatedContainer>
        </div>

        <AnimatedContainer
          className="w-full mt-5"
          initial={{ opacity: 0 }}
          animation={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
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
              href='https://drive.google.com/file/d/10HsCus_K9jtwRVIEVsPvWa60brk7z16h/view?usp=sharing'
              target="_blank"
            >
              Check C.V.
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
              About
            </h2>

            <p className="text-base text-white font-medium mt-5 indent-8 text-justify">
              In 2019, when I was in the Audiovisual field and worked as an administrative assistant for an English course platform. Being responsible for alerting and suggesting improvements to the website, I started to have a little interest in Web development.
            </p>
            <p className="text-base text-white font-medium mt-5 indent-8 text-justify">
              EmIn 2023, after being unemployed for a while, I decided to take the plunge and start studying programming and even without any knowledge in the area, one name was on my mind: &ldquo;Javascript&rdquo;.
            </p>
            <p className="text-base text-white font-medium mt-5 indent-8 text-justify">
              Now I am a young Full-stack programmer focused on Javascript and I am looking for my first job in the area. I am proactive, dynamic, responsible, I have an easy learning ability and I am always willing to face new challenges.
            </p>
          </section>

          <section id="skills" className="w-full mt-24">
            <h2 className="text-white font-bold text-3xl flex items-center gap-1">
              <ChevronsRight size={30} className="mt-1" />
              Skills
            </h2>

            <div className="w-full flex flex-col justify-center items-center mt-10">
              <div className="w-full h-fit flex flex-col justify-center items-center">
                <h3 className="text-center text-xl font-medium text-white">Front-end</h3>
                <div className="w-full flex justify-center items-center md:gap-3 lg:gap-5 xl:gap-8">
                  <TechStack items={frontTechStackItems} language="en" />
                </div>
              </div>
              <div className="w-full h-fit flex flex-col justify-center items-center">
                <h3 className="text-center text-xl font-medium text-white">Back-end</h3>
                <div className="w-full flex justify-center items-center md:gap-3 lg:gap-5 xl:gap-8">
                  <TechStack items={backTechStackItems} language="en" />
                </div>
              </div>
            </div>

            <div className="w-full justify-center items-center mt-10">
              <h3 className="text-center lg:text-start text-xl font-medium text-white">Some other skills:</h3>
              <ul className="w-full flex flex-col gap-2 mt-4">
                <li className="text-base text-white flex"><ChevronRight /> Serverless with AWS</li>
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
              Projects
            </h2>

            <div className="w-full justify-center flex flex-col items-center mt-10 gap-4">
              {
                projectsEN.map((project, index) => (
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
