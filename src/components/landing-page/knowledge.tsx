interface Technology {
  name: string;
  description: string;
  level: string;
}

const technologies: Technology[] = [
  {
    name: 'React.js',
    description: 'Desenvolvimento de interfaces de usuário reativas e componentizadas.',
    level: 'Avançado',
  },
  {
    name: 'TypeScript',
    description: 'Criação de código mais robusto e seguro com tipagem estática.',
    level: 'Avançado',
  },
  {
    name: 'Node.js & Express.js',
    description: 'Construção de APIs RESTful e aplicações back-end escaláveis.',
    level: 'Intermediário',
  },
  {
    name: 'Tailwind CSS',
    description: 'Estilização rápida e eficiente com classes utilitárias.',
    level: 'Avançado',
  },
  {
    name: 'MongoDB',
    description: 'Modelagem e gerenciamento de bancos de dados NoSQL.',
    level: 'Intermediário',
  },
  {
    name: 'Figma',
    description: 'Criação de protótipos e designs de alta fidelidade para web e mobile.',
    level: 'Intermediário',
  },
];

export default function Knowledge() {
  return (
    <section id="experience" className="bg-gray-100 py-20 px-4 relative overflow-hidden w-full">
      <div className="container mx-auto text-center z-10 relative">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Minhas Tecnologias</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12">
          Minha experiência profissional me permitiu construir uma base sólida nas seguintes tecnologias, que utilizo diariamente para criar soluções eficientes e modernas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{tech.name}</h3>
              <p className="text-gray-700 mb-2">{tech.description}</p>
              <div className="text-sm font-medium text-gray-500">
                Nível: <span className="font-bold text-gray-800">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};