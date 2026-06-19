import FadeUp from "./ui/FadeUp";
import {
  Brain,
  Code2,
  FolderGit2,
  LayoutDashboard,
  Terminal,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section className="relative bg-black py-24 md:py-32 px-4 md:px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/3 top-20 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>
<FadeUp>
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-6">
            Intelligent Workspace
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Built For
            <br />
            Modern Engineering.
          </h2>

          <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            AI assistance, repository intelligence, terminal execution,
            and code editing — all unified in one workspace.
          </p>

        </div>

        {/* Workspace Container */}
        <div className="
          relative
          overflow-x-auto
          rounded-[32px]
          border
          border-zinc-800
          bg-zinc-950/70
          backdrop-blur-xl
          shadow-2xl
        ">

          <div className="grid grid-cols-12 min-h-[700px] min-w-[1200px]">

            {/* Sidebar */}
            <div className="col-span-2 border-r border-zinc-800 bg-zinc-900/50 p-6">

              <div className="text-white text-2xl font-bold mb-12">
                Maddy
              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3 text-zinc-300 bg-white/5 border border-zinc-800 rounded-xl px-4 py-3">
                  <LayoutDashboard size={18} />
                  Dashboard
                </div>

                <div className="flex items-center gap-3 text-zinc-500 hover:text-white transition px-4 py-3">
                  <Code2 size={18} />
                  Workspace
                </div>

                <div className="flex items-center gap-3 text-zinc-500 hover:text-white transition px-4 py-3">
                  <Brain size={18} />
                  AI Assistant
                </div>

                <div className="flex items-center gap-3 text-zinc-500 hover:text-white transition px-4 py-3">
                  <FolderGit2 size={18} />
                  Repositories
                </div>

                <div className="flex items-center gap-3 text-zinc-500 hover:text-white transition px-4 py-3">
                  <Terminal size={18} />
                  Terminal
                </div>

              </div>
            </div>

            {/* Editor Section */}
            <div className="col-span-7 border-r border-zinc-800 flex flex-col">

              {/* Tabs */}
              <div className="flex items-center gap-4 px-6 py-4 border-b border-zinc-800 bg-zinc-900/30">

                <div className="px-4 py-2 rounded-lg bg-white/5 text-zinc-300 text-sm">
                  app.tsx
                </div>

                <div className="px-4 py-2 rounded-lg text-zinc-500 text-sm">
                  server.py
                </div>

              </div>

              {/* Code Area */}
              <div className="flex-1 p-8 font-mono text-sm md:text-base">

                <div className="space-y-3">

                  <div className="text-purple-400">
                    import AIWorkspace from './workspace'
                  </div>

                  <div className="text-blue-400">
                    const app = new Maddy()
                  </div>

                  <div className="text-zinc-500">
                    // AI-native developer workflow
                  </div>

                  <div className="text-cyan-400">
                    app.initializeWorkspace()
                  </div>

                  <div className="text-green-400">
                    app.startRealtimeTerminal()
                  </div>

                  <div className="text-yellow-400">
                    app.connectRepository()
                  </div>

                </div>

              </div>

              {/* Bottom Terminal */}
              <div className="border-t border-zinc-800 bg-black/40 p-6 font-mono text-sm">

                <div className="text-green-400">
                  $ python main.py
                </div>

                <div className="text-zinc-400 mt-2">
                  Maddy AI Engine initialized...
                </div>

              </div>
            </div>

            {/* AI Panel */}
            <div className="col-span-3 bg-zinc-900/40 flex flex-col">

              {/* AI Header */}
              <div className="px-6 py-5 border-b border-zinc-800">

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>

                  <div className="text-white font-medium">
                    Maddy AI
                  </div>

                </div>

              </div>

              {/* AI Messages */}
              <div className="flex-1 p-6 space-y-6 overflow-hidden">

                <div className="bg-white/5 border border-zinc-800 rounded-2xl p-4 text-zinc-300 text-sm leading-relaxed">
                  Repository analyzed successfully.
                  Authentication flow detected in auth middleware.
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 text-zinc-200 text-sm leading-relaxed">
                  Suggested optimization:
                  Use Redis caching for session management.
                </div>

                <div className="bg-white/5 border border-zinc-800 rounded-2xl p-4 text-zinc-300 text-sm leading-relaxed">
                  AI debugging engine ready.
                </div>

              </div>

              {/* Input */}
              <div className="p-6 border-t border-zinc-800">

                <div className="rounded-2xl border border-zinc-800 bg-black/50 px-4 py-4 text-zinc-500 text-sm">
                  Ask Maddy AI...
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      </FadeUp>
    </section>
  );
}

export default DashboardPreview;