import FadeUp from "./ui/FadeUp";

function AIChatSection() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <FadeUp>
          <div className="text-center mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
              AI Assistant
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Your Intelligent
              <br />
              Engineering Partner.
            </h2>

            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Analyze repositories, debug systems, generate code,
              and architect applications with AI assistance.
            </p>

          </div>
        </FadeUp>

        {/* Chat Window */}
        <FadeUp delay={0.2}>
          <div
            className="
              max-w-5xl
              mx-auto
              rounded-[32px]
              border
              border-zinc-800
              bg-zinc-950/70
              backdrop-blur-xl
              overflow-hidden
              shadow-2xl
            "
          >

            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-zinc-900/50">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

                <div className="text-white font-medium">
                  Maddy AI Assistant
                </div>

              </div>

              <div className="text-zinc-500 text-sm">
                GPT-4 Turbo
              </div>

            </div>

            {/* Messages */}
            <div className="p-8 space-y-8">

              {/* User Message */}
              <div className="flex justify-end">

                <div
                  className="
                    max-w-xl
                    rounded-3xl
                    bg-purple-500
                    text-white
                    px-6
                    py-5
                    text-sm
                    leading-relaxed
                    shadow-lg
                  "
                >
                  Analyze my authentication flow and detect
                  security vulnerabilities in the backend.
                </div>

              </div>

              {/* AI Message */}
              <div className="flex justify-start">

                <div
                  className="
                    max-w-2xl
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-white/[0.03]
                    backdrop-blur-xl
                    px-6
                    py-5
                    text-zinc-300
                    text-sm
                    leading-relaxed
                  "
                >

                  <div className="text-purple-400 mb-4 font-medium">
                    Maddy AI
                  </div>

                  <p className="mb-4">
                    Authentication middleware detected successfully.
                    JWT validation logic identified in auth handler.
                  </p>

                  <div
                    className="
                      rounded-2xl
                      bg-black/50
                      border
                      border-zinc-800
                      p-5
                      font-mono
                      text-xs
                      text-green-400
                      overflow-x-auto
                    "
                  >
                    {`Potential vulnerability detected:

- Missing refresh-token rotation
- No request rate limiting
- Session expiration too long

Suggested Fix:
Implement Redis-backed refresh token storage
with rotating session validation.`}
                  </div>

                  <p className="mt-4">
                    AI confidence score: 94%
                  </p>

                </div>

              </div>

              {/* Typing Indicator */}
              <div className="flex items-center gap-2 text-zinc-500 text-sm">

                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-200"></div>

                <span className="ml-3">
                  Maddy AI is thinking...
                </span>

              </div>

            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default AIChatSection;