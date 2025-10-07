import BlogPostPage from "./postPage"

export const generateStaticParams = () => {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

export default async function BlogDetailPage(props: PageProps<'/blog/[slug]'>) {
  return <BlogPostPage {...props} />
}