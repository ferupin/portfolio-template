import { Link } from "@remix-run/react";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container my-4 mx-auto flex flex-row justify-between text-gray-400">
      <div className="text-sm flex gap-2 items-center">
        &copy; {year} Todos os direitos reservados. Feito com{" "}
        <FaHeart className="text-purple-500" /> por Tifany Nunes
      </div>

      <div className="flex flex-row gap-4">
        <Link
          to={"https://x.com/pinuyami"}
          target="_blank"
          className="hover:text-purple-500"
        >
          <FaXTwitter />
        </Link>

        <Link
          to={"https://www.linkedin.com/in/tifanyanunes/"}
          target="_blank"
          className="hover:text-purple-500"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
