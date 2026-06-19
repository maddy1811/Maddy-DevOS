import { motion } from "framer-motion";

function GlowOrbs() {
  return (
    <>
      {/* Purple Orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          w-[350px]
          h-[350px]
          bg-purple-500/20
          rounded-full
          blur-[120px]
          -z-10
        "
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-10
          right-10
          w-[300px]
          h-[300px]
          bg-cyan-500/20
          rounded-full
          blur-[120px]
          -z-10
        "
      />
    </>
  );
}

export default GlowOrbs;