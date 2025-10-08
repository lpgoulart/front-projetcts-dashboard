export default function AboutMe() {
  return (
    <section className="bg-gray-100 py-20 px-4 relative overflow-hidden w-full">
      <div className="absolute transform skew-5 -rotate-5 bg-gray-800 h-[120%] sm:w-[100px] lg:w-[400px] -top-1 -left-8"></div>
      <div className="absolute transform -skew-5 rotate-5 bg-gray-800 h-[120%] sm:w-[100px] lg:w-[400px] -top-1 -right-8"></div>
      <div className="container mx-auto text-center border border-gray-100 rounded-lg p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Mim</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Sou um desenvolvedor full-stack com experiência em React, Node.js e TypeScript. Minha paixão é solucionar problemas complexos e construir aplicações web que sejam tanto poderosas quanto fáceis de usar. Estou sempre aprendendo novas tecnologias e aprimorando minhas habilidades para entregar o melhor trabalho possível.
        </p>
      </div>
    </section>
  );
};
