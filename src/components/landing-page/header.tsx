export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-400 hover:text-blue-500">
          Projetinhos
        </a>
        <div className="flex space-x-4 sm:space-x-8">
          <a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300">Sobre Mim</a>
          <a href="#projects" className="text-white hover:text-blue-400 transition-colors duration-300">Projetos</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300">Contato</a>
        </div>
      </nav>
    </header>
  );
};