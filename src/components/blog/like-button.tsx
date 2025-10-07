'use client'

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikeButton({ post }: { post: { isLiked: boolean; id: number } }) {

  const { isLiked, id } = post;
  const [liked, setLiked] = useState(isLiked);

  const handleLikeToggle = (postId: number) => {
    post.isLiked = !post.isLiked;
    setLiked(!liked);
  }


  return (
    <button onClick={() => handleLikeToggle(id)} className={`mt-2 p-2 rounded text-black cursor-pointer`}>
      {!liked ? <FaRegHeart className="text-purple-700 text-2xl" /> : <FaHeart className="text-purple-700 text-2xl" />}
    </button>
  );
}