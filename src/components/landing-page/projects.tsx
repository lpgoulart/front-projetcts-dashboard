'use client'

import Link from "next/link";

interface ProjectDashboardProps {
  projectId: number;
  onGoBack: () => void;
}

const projects = [
  { id: 1, title: 'Dashboard de Vendas', description: 'Este é o dashboard completo do projeto de vendas. Ele foi construído usando React, D3.js para os gráficos e uma API RESTful para os dados.', link: 'https://link-do-dashboard.com' },
  { id: 2, title: 'Blog Pessoal', description: 'Este blog foi desenvolvido com Next.js e Tailwind CSS para ser rápido e ter um design moderno. Os posts são gerenciados com markdown e o deploy é feito na Vercel.', link: 'https://link-do-blog.com' },
  { id: 3, title: 'E-commerce Moderno', description: 'Uma loja virtual responsiva construída com React, Redux para o gerenciamento de estado e Stripe para o processamento de pagamentos.', link: 'https://link-do-ecommerce.com' },
]

export default function Projects() {

  return (
    <section id="projects" className="bg-gray-800 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Meus Projetos</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Explore uma coleção completa dos meus trabalhos e veja os detalhes técnicos de cada projeto.
        </p>
        <Link
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
        >
          Ver Todos os Projetos
        </Link>
      </div>
    </section>
  );
}