import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function SocialLinks() {
  return (
    <ul className="w-full flex gap-4">
      <li>
        <Link
          href='https://github.com/Samuka0222'
          target="_blank"
          className="hover:text-white transition-colors"
        >
          <Github size={28} />
        </Link>
      </li>
      <li>
        <Link
          href='https://www.linkedin.com/in/samuelmachado0222/'
          target="_blank"
          className="hover:text-white transition-colors"
        >
          <Linkedin size={28} />
        </Link>
      </li>
      <li>
        <Link
          href='https://www.instagram.com/salvesamukaa/'
          target="_blank"
          className="hover:text-white transition-colors"
        >
          <Instagram size={28} />
        </Link>
      </li>
      {/* TODO: Create Email Tooltip */}
      {/* <li>
        <Link
          href='mailto:mmachado0222@gmail.com'
          target="_blank"
          className="hover:text-white transition-colors"
        >
          <Mail size={28} />
        </Link>
      </li> */}
    </ul>
  )
}
