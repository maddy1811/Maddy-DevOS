import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        origin-left
        z-[9999]
        bg-gradient-to-r
        from-purple-500
        via-cyan-400
        to-blue-500
        shadow-[0_0_20px_rgba(168,85,247,0.8)]
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;