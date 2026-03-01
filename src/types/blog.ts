export type BlockType = 'paragraph' | 'heading' | 'image' | 'video' | 'quote';

export interface BlogBlock {
  id: string;
  type: BlockType;
  content: string;
  caption?: string; 
  author?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  readTime: string;
  excerpt: string;
  blocks: BlogBlock[];
}