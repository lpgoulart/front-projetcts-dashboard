'use client'

import BlogHeader from "@/components/blog/header";
import { useEffect, useState } from "react";
import dataJSON from "../api/blog/data.json";
import { FaExternalLinkAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

interface IBlogData {
  id: number;
  title: string;
  description: string;
  isLiked?: boolean;
  datetime?: string;
}

export default function BlogPage() {

  const [allPosts, setAllPosts] = useState<IBlogData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IBlogData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const { posts } = dataJSON as any;
      const mappedPosts: IBlogData[] = posts?.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        isLiked: item.isLiked,
        datetime: new Date(item.datetime).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        })
      })) || [];
      setAllPosts(mappedPosts);
      setFilteredPosts(mappedPosts);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const filtered = allPosts?.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, allPosts]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleLikeToggle = (postId: number) => {
    const updatedPosts = allPosts.map(post => {
      if (post.id === postId) {
        return { ...post, isLiked: !post.isLiked };
      }
      return post;
    });
    setAllPosts(updatedPosts);
    setFilteredPosts(updatedPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <BlogHeader />
      <main className="p-4">
        <div className="w-full my-10 text-center flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Blog Project</h1>
          <input
            type="text"
            className="border border-purple-700 p-2 rounded max-w-xl w-full"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {
          filteredPosts.length === 0 && (
            <p className="text-center text-2xl text-gray-500">No posts found.</p>
          )
        }

        <div className="space-y-4 m-auto max-w-5xl">
          {filteredPosts?.map(post => (
            <div key={post.id} className={`border p-10 rounded shadow items-center ${post.isLiked ? 'border-purple-700 shadow-red-200' : 'border-gray-300 shadow-purple-200'}`}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-purple-700 text-">{post.datetime}</span>
                <button onClick={() => handleLikeToggle(post.id)} className={`mt-2 p-2 rounded text-black cursor-pointer`}>
                  {!post.isLiked ? <FaRegHeart className="text-purple-700 text-2xl" /> : <FaHeart className="text-purple-700 text-2xl" />}
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="text-xl text-gray-700">{post.description}</p>
                </div>
                <Link href={`/blog/${post.id}`} className="ml-auto text-purple-700 hover:underline flex items-center gap-2">
                  <FaExternalLinkAlt className="text-purple-700 text-2xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
