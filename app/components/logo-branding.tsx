import { Link } from '@remix-run/react'

const LogoBranding = () => {
  return (
    <span className="relative text-2xl font-extrabold py-1 px-2 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent hover:from-fuchsia-500 hover:via-violet-600 hover:to-indigo-600 transition-all duration-500 ease-in-out transform hover:scale-105">
      <Link 
        to="http://localhost:5173/" 
      >
        <span className="relative z-10">Ferupin</span>
        <span className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-violet-400/20 to-fuchsia-400/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
      </Link>
    </span>
  );
};

export default LogoBranding;