import { motion } from "framer-motion";

const items = [
  "AI-Powered Workflows",
  "Real-Time Debugging",
  "GitHub Intelligence",
  "Terminal Execution",
  "AI Repository Analysis",
  "Modern Developer Experience",
  "Code Generation",
  "Workspace Automation",
];

function MarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-800 bg-black py-6">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>

      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-16 whitespace-nowrap w-max"
      >

        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              text-zinc-300
              text-lg
              font-medium
            "
          >

            <div className="w-2 h-2 rounded-full bg-purple-400"></div>

            <span>{item}</span>

          </div>
        ))}

      </motion.div>
    </section>
  );
}

export default MarqueeSection;