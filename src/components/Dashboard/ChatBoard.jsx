import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ChatBoard() {
  const { token, login } = useAuth();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5500/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_input: input }),
      });

      if (res.ok) {
        const data = await res.json();
        const botResponse = {
          from: "bot",
          text: data.data.response || data.message,
        };
        setMessages((prev) => [...prev, botResponse]);

        login(token); // reusa login() para actualizar tasks
      } else {
        setMessages((prev) => [...prev, { from: "bot", text: "Error del servidor." }]);
      }
    } catch (err) {
      console.error("Error en chat:", err);
      setMessages((prev) => [...prev, { from: "bot", text: "Error de conexión." }]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-md mb-6">
      <div className="h-64 overflow-y-auto px-2 mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-xl text-sm whitespace-pre-wrap ${
              msg.from === "user"
                ? "bg-indigo-100 text-indigo-900 self-end ml-auto"
                : "bg-cyan-100 text-cyan-900 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe algo..."
          className="flex-1 px-4 py-2 rounded-xl border border-indigo-200 bg-white/70 text-gray-800 shadow"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-indigo-500 text-white rounded-xl shadow hover:bg-indigo-600 disabled:opacity-50"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
