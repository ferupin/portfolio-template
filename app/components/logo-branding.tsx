import { Link } from '@remix-run/react'

const LogoBranding = () => {
  return (
    <span className="relative text-2xl font-extrabold py-1 px-2 bg-gradient-to-br from-pink-400 via-rose-300 to-violet-500 bg-clip-text text-transparent hover:from-pink-400 hover:via-rose-400 hover:to-violet-400 transition-all duration-500 ease-in-out transform hover:scale-105">
      <Link 
        to="http://localhost:5173/" 
      >
        <span className="relative z-10">Ferupin</span>
        <span className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-300 to-violet-500 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
      </Link>
    </span>
  );
};

export default LogoBranding;