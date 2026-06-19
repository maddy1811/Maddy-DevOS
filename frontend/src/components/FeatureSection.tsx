import { Brain, GitBranch, Terminal, Sparkles } from "lucide-react";
import FadeUp from "./ui/FadeUp";

const features = [
    {
        icon: Brain,
        title: "AI Repository Analysis",
        description:
            "Understand large codebases instantly with intelligent architecture analysis.",
    },

    {
        icon: GitBranch,
        title: "GitHub Integration",
        description:
            "Connect repositories and let AI understand your entire project structure.",
    },

    {
        icon: Terminal,
        title: "Browser Terminal",
        description:
            "Run commands, debug applications, and stream outputs directly in workspace.",
    },

    {
        icon: Sparkles,
        title: "AI Project Generator",
        description:
            "Generate scalable architectures, APIs, and starter code using AI.",
    },
];

function FeatureSection() {
    return (
        <section className="relative bg-black py-32 px-6 overflow-hidden">

            {/* Glow Background */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading */}
                <FadeUp>
                    <div className="text-center mb-20">

                        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-6">
                            Powerful Features
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                            Everything Developers Need.
                        </h2>

                        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
                            Built for modern developers who want AI-powered workflows,
                            faster debugging, and smarter engineering tools.
                        </p>

                    </div>
                </FadeUp>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <FadeUp delay={index * 0.15}>

                    <div
                    key={index}
                    className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  hover:border-purple-500/50
                  transition-all
                  duration-500
                "
                                >

                                    {/* Glow Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

                                    <div className="relative z-10">

                                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6">

                                            <Icon className="text-purple-400" size={28} />

                                        </div>

                                        <h3 className="text-2xl font-semibold text-white mb-4">
                                            {feature.title}
                                        </h3>

                                        <p className="text-zinc-400 leading-relaxed">
                                            {feature.description}
                                        </p>

                                    </div>
                                </div>
                                </FadeUp>
                                );
          })}
                            </div>

                            
      </div>
        </section>
    );
}

export default FeatureSection;