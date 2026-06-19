import FadeUp from "./ui/FadeUp";
function TerminalPreview() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
    <FadeUp>
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
            Real-Time Terminal
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Execute Directly
            <br />
            Inside Workspace.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
            Run commands, debug applications, install packages,
            and stream terminal output in real time.
          </p>

        </div>
        

        {/* Terminal */}
        <div className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-zinc-800
          bg-zinc-950/80
          backdrop-blur-xl
          shadow-2xl
        ">

          {/* Terminal Top Bar */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <div className="ml-4 text-zinc-500 text-sm">
              terminal
            </div>

          </div>

          {/* Terminal Content */}
          <div className="p-8 font-mono text-sm md:text-base space-y-4">

            <div className="text-green-400">
              $ git clone maddy-ai
            </div>

            <div className="text-zinc-400">
              Cloning into 'maddy-ai'...
            </div>

            <div className="text-green-400">
              $ npm install
            </div>

            <div className="text-zinc-400">
              Installing dependencies...
            </div>

            <div className="text-green-400">
              $ npm run dev
            </div>

            <div className="text-cyan-400">
              Maddy AI Workspace running on localhost:3000
            </div>

            <div className="text-purple-400">
              AI debugging engine initialized...
            </div>

            <div className="text-blue-400 animate-pulse">
              Ready.
            </div>

          </div>
        </div>
        
      </div>
      </FadeUp>
    </section>
  );
}

export default TerminalPreview;