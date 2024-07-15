import { IProject } from "@/interfaces/IProject";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="w-full bg-slate-900 px-5 py-3 rounded-xl flex flex-col justify-center items-center gap-3">
      <h5 className="text-gray-300 text-xl text-start w-full">{project.title}</h5>
      <div className="w-[350px] h-fit">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={350}
          height={100}
          className="w-full text-sm rounded-xl"
        />
      </div>
      <p className="text-base text-white font-medium text-justify">
        {project.description}
      </p>
      <div className="w-full flex justify-center items-center gap-8">
        {
          project.linkPreview && (
            <Link
              href={project.linkPreview}
              className="text-base text-white hover:text-gray-400"
            >
              Preview
            </Link>
          )
        }
        {
          project.linkCode && (
            <Link
              href={project.linkCode}
              className="text-base text-white hover:text-gray-400"
            >
              Source Code
            </Link>
          )
        }
      </div>
      <ul className="w-full flex gap-4 mt-3">
        {project.tags.map(tag => (
          <li
            key={tag}
            className="text-base text-white ring ring-white rounded-full px-3 text-center"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}