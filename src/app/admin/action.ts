'use server';

import { savePost } from '@/app/lib/blog';
import { BlogPost } from '@/types/blog';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function createBlogAction(data: BlogPost) {
  await savePost(data);
  revalidatePath('/blog'); // Clear cache to show new post
  redirect(`/blog/${data.slug}`);
}
export async function deletePostAction(formData: FormData) {
  const slug = formData.get('slug') as string;
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.json`);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  revalidatePath('/blog');
  revalidatePath('/admin/posts');
}