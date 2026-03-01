
import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/blog';

// Using a constant for the directory path
const POSTS_DIR = path.join(process.cwd(), 'content/posts');

// Helper to ensure directory exists without repeating code
const ensureDirectory = () => {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
};

export async function getAllPosts(): Promise<BlogPost[]> {
  ensureDirectory();
  
  const fileNames = fs.readdirSync(POSTS_DIR);
  
  const allPosts = fileNames
    .filter((fn) => fn.endsWith('.json'))
    .map((fileName) => {
      const filePath = path.join(POSTS_DIR, fileName);
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content) as BlogPost;
    });

  // Improved date sorting (Newest first)
  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content) as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function savePost(post: BlogPost) {
  ensureDirectory();
  
  // Ensure the slug doesn't contain path traversal characters
  const safeSlug = post.slug.replace(/[^a-z0-9-]/g, ''); 
  const filePath = path.join(POSTS_DIR, `${safeSlug}.json`);
  
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2), 'utf8');
}