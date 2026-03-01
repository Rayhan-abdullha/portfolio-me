'use client';
import { deletePostAction } from '../action';
import { Trash2 } from 'lucide-react';

const DeleteButton = ({ post }: { post: any }) => {
  return (
    <form action={deletePostAction}>
        <input type="hidden" name="slug" value={post.slug} />
        <button 
        type="submit"
        className="p-2 text-red-500/50 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all cursor-pointer"
        onClick={(e) => {
            if(!confirm("Are you sure you want to delete this post?")) e.preventDefault();
        }}
        >
        <Trash2 size={18} />
        </button>
    </form>
  )
}

export default DeleteButton