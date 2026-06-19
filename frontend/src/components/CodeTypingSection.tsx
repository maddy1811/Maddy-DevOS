import { motion } from "framer-motion";
import FadeUp from "./ui/FadeUp";

const codeLines = [
  "def analyze_repository():",
  "    ai.scan_architecture()",
  "    ai.detect_vulnerabilities()",
  "    ai.generate_debug_report()",
  "    return optimized_system",
];

function CodeTypingSection() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute right-10 top-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <FadeUp>
          <div className="text-center mb-20">

            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-6">
              Intelligent Automation
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              AI That Writes,
              <br />
              Understands & Optimizes.
            </h2>

            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Maddy AI assists developers by analyzing systems,
              generating architecture, and automating workflows.
            </p>

          </div>
        </FadeUp>

        {/* Editor Window */}
        <FadeUp delay={0.2}>
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-zinc-800
              bg-zinc-950/70
              backdrop-blur-xl
              shadow-2xl
            "
          >

            {/* Top Bar */}
            <div className="flex items-center gap-3 px-6 py-5 border-b border-zinc-800 bg-zinc-900/50">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <div className="ml-4 text-zinc-500 text-sm">
                ai_analysis.py
              </div>

            </div>

            {/* Code Area */}
            <div className="p-8 font-mono text-sm md:text-base space-y-4">

              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.6,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="text-green-400"
                >
                  {line}
                </motion.div>
              ))}

              {/* Cursor */}
              <motion.div
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="
                  inline-block
                  w-3
                  h-6
                  bg-cyan-400
                  rounded-sm
                  mt-2
                "
              />

            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export default CodeTypingSection;