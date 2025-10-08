import Link from "next/link";

export default function Jumbotron() {
  return (
    <section id="home" className="bg-gray-800 text-white min-h-[30vh] flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">Olá, eu sou Lpgoulart</h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in-delay">
          Desenvolvedor apaixonado por criar experiências digitais incríveis.
        </p>
        <Link
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
        >
          Ver Projetos
        </Link>
      </div>
    </section>
  );
};