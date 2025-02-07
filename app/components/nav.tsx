import { Link } from "@remix-run/react";
import { FaGithub } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/#skills" },
  { name: "Projetos", href: "/#projects" },
];

export function Nav() {
  return (
    <div className="container p-4 flex justify-between items-center mx-auto">
      <ul className="space-x-6 flex">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.href}>
              <span className="relative cursor-pointer group">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link to={"https://github.com/pinuya"}>
        <FaGithub className="cursor-pointer hover:text-purple-500 h-5 w-5" />
      </Link>
    </div>
  );
}
