import { Link } from "@remix-run/react";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mx-auto my-4 flex flex-col items-center gap-3 text-gray-400 md:flex-row md:justify-between md:gap-0">
      <div className="text-sm flex gap-2 items-center text-center">
        &copy; {year} Feito com <FaHeart className="text-purple-500" /> por
        Tifany Nunes
      </div>

      {/* suas redes sociais */}
      <div className="flex gap-4">
        <Link
          to="https://x.com/pinuyami"
          target="_blank"
          className="hover:text-purple-500 transition-colors"
        >
          <FaXTwitter size={20} />
        </Link>

        <Link
          to="https://www.linkedin.com/in/tifanyanunes/"
          target="_blank"
          className="hover:text-purple-500 transition-colors"
        >
          <FaLinkedin size={20} />
        </Link>
      </div>
    </div>
  );
}
