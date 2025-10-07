import Header from '@/components/blog/header';
import BackButton from '@/components/blog/back-button';
import LikeButton from '@/components/blog/like-button';
import dataJSON from '../../api/blog/data.json';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts: any[] = dataJSON.posts;
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  const post = dataJSON.posts.find((p: any) => p.id.toString() === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Header></Header>
      <main className='p-4'>
        <article className='max-w-6xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center mb-6'>
            <BackButton />
            <LikeButton post={post} />
          </div>
          <h1 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            {post.title}
          </h1>
          <p className='text-gray-600 dark:text-gray-300 mb-6'>
            {new Date(post.datetime).toLocaleDateString()}
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-200 leading-relaxed'>
            {post.description}
          </p>
        </article>
      </main>
    </div>
  );
}