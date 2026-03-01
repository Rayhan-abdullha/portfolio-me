import { getAllPosts } from '../lib/blog';
import BlogListClient from './components/BlogListClient';

export default async function BlogListPage() {
  const posts = await getAllPosts();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <BlogListClient posts={posts} />;
}