export default function ContactMe() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Estou sempre em busca de novas oportunidades e desafios. Fique à vontade para entrar em contato para conversarmos!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/lpgoulart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lpgoulart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}