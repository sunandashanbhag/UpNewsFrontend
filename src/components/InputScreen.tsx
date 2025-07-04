import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InputScreen() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // Handler for submit
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here, you'd call the backend and then navigate
    // For now, just go to the news screen
    navigate("/news", { state: { mood: input } });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-green-100 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800 text-center">
        How are you feeling today?
      </h1>
      <form
        className="flex flex-col items-center w-full max-w-md gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full items-center bg-white rounded-2xl shadow-md px-4 py-2 gap-2 focus-within:ring-2 ring-pink-200">
          <input
            className="flex-1 bg-transparent outline-none text-lg py-2"
            type="text"
            value={input}
            placeholder="How are you feeling today?"
            onChange={e => setInput(e.target.value)}
            required
          />
          <button
            type="button"
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition"
            title="Use microphone (coming soon!)"
            tabIndex={-1}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2} className="text-pink-400" viewBox="0 0 24 24">
              <path d="M12 18v3m6-3a6 6 0 1 1-12 0m6 0v3m0-3V9a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0z" />
            </svg>
          </button>
        </div>
        <button
          className="w-full py-3 bg-pink-400 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-500 text-lg transition"
          type="submit"
        >
          Find News
        </button>
      </form>
    </div>
  );
}
