export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2025 lpgoulart. Todos os direitos reservados.</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/lpgoulart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lpgoulart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};