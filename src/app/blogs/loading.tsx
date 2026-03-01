function BlogLoading() {
  const skeletons = [1, 2, 3];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-20 border-b border-zinc-800/50 pb-10">
        <div className="h-16 w-64 bg-zinc-900 rounded-2xl mb-4" />
        <div className="h-4 w-48 bg-zinc-900 rounded-full" />
      </div>

      <div className="grid gap-20">
        {skeletons.map((i) => (
          <div key={i} className="grid lg:grid-cols-12 gap-8">
            {/* Image Skeleton */}
            <div className="lg:col-span-7 aspect-[16/9] bg-zinc-900 rounded-[2rem]" />
            
            {/* Content Skeleton */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div className="h-4 w-24 bg-zinc-900 rounded-full" />
              <div className="h-10 w-full bg-zinc-900 rounded-xl" />
              <div className="h-10 w-3/4 bg-zinc-900 rounded-xl" />
              <div className="space-y-2 pt-4">
                <div className="h-4 w-full bg-zinc-900/50 rounded-full" />
                <div className="h-4 w-full bg-zinc-900/50 rounded-full" />
                <div className="h-4 w-2/3 bg-zinc-900/50 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogLoading;