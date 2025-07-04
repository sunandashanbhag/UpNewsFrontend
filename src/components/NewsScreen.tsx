import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
  url: string;
};

const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Scientists discover new species of butterfly",
    summary: "A colorful butterfly has been found in the Amazon rainforest.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    url: "https://example.com/butterfly"
  },
  {
    id: "2",
    title: "Community garden brings neighbors together",
    summary: "Urban dwellers are growing fresh food and friendships.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    url: "https://example.com/garden"
  },
  {
    id: "3",
    title: "Local musician goes viral with uplifting song",
    summary: "A positive tune spreads joy across social media.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    url: "https://example.com/music"
  }
];

export default function NewsScreen() {
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [lastDir, setLastDir] = useState<string | null>(null);

  function handleSwipe(direction: "left" | "right", id: string) {
    setLastDir(direction);
    setNews((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-green-50 to-pink-100 px-4 py-8">
        <div className="w-full max-w-md flex flex-col items-center justify-center relative min-h-[400px]">
        <AnimatePresence>
          {news.length === 0 && (
            <motion.div
              className="text-center text-2xl font-bold text-gray-500 absolute w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              No more news for now!
            </motion.div>
          )}
          {news.slice(0, 1).map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center absolute w-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              whileDrag={{ rotate: 5 }}
              onDragEnd={(_event, info) => {
                if (info.offset.x < -150) {
                  handleSwipe("left", item.id);
                } else if (info.offset.x > 150) {
                  handleSwipe("right", item.id);
                }
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full h-56 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.summary}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-400 text-white px-4 py-2 rounded-xl font-semibold hover:bg-pink-500 transition"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {lastDir && (
        <div className="mt-6 text-lg text-gray-700">
          You swiped <span className="font-bold">{lastDir}</span>
        </div>
      )}
    </div>
  );
}
