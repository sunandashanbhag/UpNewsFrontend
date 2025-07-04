import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mic } from "lucide-react";

export default function InputScreen() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/news", { state: { mood: input } });
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-green-100">
      <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 mx-2">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
          How are you feeling today?
        </h1>
        <form
          className="flex flex-col gap-4 w-full items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center w-full bg-white rounded-xl shadow px-4 py-2 gap-2 focus-within:ring-2 ring-pink-200">
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
              className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition flex items-center justify-center"
              title="Use microphone (coming soon!)"
              tabIndex={-1}
            >
              <Mic size={24} strokeWidth={2.5} className="text-pink-400" />
            </button>
          </div>
          <button
            className="w-full md:w-[200px] mx-auto py-3 bg-pink-400 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-500 text-lg transition"
            type="submit"
          >
            Find News
          </button>
        </form>
      </div>
    </div>
  );
}
