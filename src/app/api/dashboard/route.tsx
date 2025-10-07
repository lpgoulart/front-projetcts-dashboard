import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const users = [
  {
    imageSrc: "https://images.unsplash.com/photo-1542831371-29b018445585?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A code editor with a web development project",
    title: "AI Chatbot Interface",
    description: "A sleek, responsive chatbot UI built to integrate with various AI APIs, offering real-time conversation and customizable themes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    projectLink: "https://github.com/your-username/ai-chatbot-ui",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1509712792617-e43598f121d1?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A dashboard showing data visualization",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for a startup, visualizing key metrics with real-time charts and customizable widgets.",
    tags: ["D3.js", "Next.js", "PostgreSQL", "Chakra UI"],
    projectLink: "https://github.com/your-username/data-dashboard",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1549692520-acc666994116?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A mobile phone with a social media app",
    title: "Social Media App",
    description: "A mobile-first social app for sharing photos with friends, featuring likes, comments, and a real-time feed.",
    tags: ["React Native", "Firebase", "Expo", "Redux"],
    projectLink: "https://github.com/your-username/social-media-app",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1557804476-8fe19077229e?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A landing page design",
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase projects, skills, and a blog. Designed and developed from scratch to be fast and responsive.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    projectLink: "https://github.com/your-username/portfolio-site",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1542831371-29b018445585?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A code editor with a web development project",
    title: "AI Chatbot Interface",
    description: "A sleek, responsive chatbot UI built to integrate with various AI APIs, offering real-time conversation and customizable themes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    projectLink: "https://github.com/your-username/ai-chatbot-ui",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1509712792617-e43598f121d1?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A dashboard showing data visualization",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for a startup, visualizing key metrics with real-time charts and customizable widgets.",
    tags: ["D3.js", "Next.js", "PostgreSQL", "Chakra UI"],
    projectLink: "https://github.com/your-username/data-dashboard",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1549692520-acc666994116?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A mobile phone with a social media app",
    title: "Social Media App",
    description: "A mobile-first social app for sharing photos with friends, featuring likes, comments, and a real-time feed.",
    tags: ["React Native", "Firebase", "Expo", "Redux"],
    projectLink: "https://github.com/your-username/social-media-app",
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1557804476-8fe19077229e?auto=format&fit=crop&q=80&w=400&h=400",
    imageAlt: "A landing page design",
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase projects, skills, and a blog. Designed and developed from scratch to be fast and responsive.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    projectLink: "https://github.com/your-username/portfolio-site",
  }
];
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}