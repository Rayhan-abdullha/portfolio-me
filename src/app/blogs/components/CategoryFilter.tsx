'use client';

type Props = {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) {
  return (
    <div className="mb-12">
      <div className="flex md:flex-row flex-wrap gap-3 ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
            ${
              activeCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}