export default function Loading() {
  return (
    <main className="min-h-screen bg-[--background] text-[--foreground] py-20 px-6 animate-pulse">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button Skeleton */}
        <div className="w-32 h-4 bg-zinc-800 rounded mb-12" />

        {/* Header Skeleton */}
        <header className="mb-12">
          <div className="flex gap-3 mb-6">
            <div className="w-20 h-4 bg-zinc-800 rounded" />
            <div className="w-16 h-4 bg-zinc-800 rounded" />
          </div>
          
          <div className="w-full h-12 bg-zinc-800 rounded-lg mb-4" />
          <div className="w-3/4 h-12 bg-zinc-800 rounded-lg mb-10" />

          <div className="aspect-video rounded-3xl bg-zinc-800 w-full" />
        </header>

        {/* Content Block Skeletons */}
        <div className="space-y-8">
          <div className="w-full h-6 bg-zinc-800 rounded w-full" />
          <div className="w-full h-6 bg-zinc-800 rounded w-[95%]" />
          <div className="w-full h-6 bg-zinc-800 rounded w-[90%]" />
          
          <div className="w-1/2 h-8 bg-zinc-800 rounded mt-12 mb-4" />
          
          <div className="w-full h-6 bg-zinc-800 rounded w-full" />
          <div className="w-full h-6 bg-zinc-800 rounded w-[98%]" />
        </div>
      </div>
    </main>
  );
}