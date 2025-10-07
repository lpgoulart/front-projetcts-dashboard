'use client';

import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import CardDisplay from '@/components/card-display';
import { env } from 'process';

const API_URL = env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function Dashboard() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: AxiosResponse<any> = await axios.get(`${API_URL}/api/dashboard`);
        setData(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <div className="flex flex-wrap gap-6">
        {data.map((project: any, index: any) => (
          <CardDisplay
            key={index}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
            tags={project.tags}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </main>
  );
}