import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../lib/api";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("/chat/", { messages: nextMessages });
      setMessages([...nextMessages, { role: "assistant", content: response.data.reply }]);
    } catch (err: any) {
      if (err?.response?.status === 401) {
        setError("Your session has expired. Please log in again.");
      } else {
        setError("Something went wrong reaching the assistant. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
          <div className="text-white font-medium">Maddy AI Assistant</div>
        </div>

        <Link to="/dashboard" className="text-zinc-500 text-sm hover:text-zinc-300">
          Back to Dashboard
        </Link>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {messages.length === 0 && (
            <div className="text-center text-zinc-500 mt-20">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
                AI Assistant
              </p>
              <p>Ask about your code, an error, or how to approach something.</p>
            </div>
          )}

          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={
                  message.role === "user"
                    ? "max-w-xl rounded-3xl bg-purple-500 text-white px-6 py-4 text-sm leading-relaxed whitespace-pre-wrap"
                    : "max-w-2xl rounded-3xl border border-zinc-800 bg-white/[0.03] backdrop-blur-xl px-6 py-4 text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap"
                }
              >
                {message.role === "assistant" && (
                  <div className="text-purple-400 mb-2 font-medium">Maddy AI</div>
                )}
                {message.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-100" />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-200" />
              <span className="ml-3">Maddy AI is thinking...</span>
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}{" "}
              {error.includes("log in") && (
                <Link to="/login" className="underline text-red-300">
                  Go to login
                </Link>
              )}
            </p>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-end gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Maddy AI..."
            rows={1}
            className="flex-1 resize-none rounded-2xl border border-zinc-800 bg-zinc-950/70 text-white px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-purple-500 text-white text-sm font-medium px-5 py-3 rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed hover:bg-purple-400 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
