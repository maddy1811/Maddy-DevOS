import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        max-w-7xl
      "
    >

      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          shadow-2xl
        "
      >

        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div
              className="
                w-3
                h-3
                rounded-full
                bg-purple-500
                shadow-[0_0_20px_#a855f7]
              "
            />

            <h1 className="text-white text-xl font-semibold tracking-tight">
              Maddy AI
            </h1>

          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">

            {["Features", "Workspace", "Terminal", "GitHub"].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  text-zinc-400
                  hover:text-white
                  transition
                  duration-300
                  relative
                  group
                "
              >

                {item}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    w-0
                    h-[1px]
                    bg-purple-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              </a>
            ))}

          </div>

          {/* Desktop Button */}
          <button
            className="
              hidden
              md:block
              px-6
              py-3
              rounded-xl
              bg-white
              text-black
              font-medium
              hover:scale-105
              transition
            "
          >
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 px-6 py-6">

            <div className="flex flex-col gap-6">

              {["Features", "Workspace", "Terminal", "GitHub"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-zinc-300 hover:text-white transition"
                >
                  {item}
                </a>
              ))}

              <button
                className="
                  mt-2
                  px-6
                  py-3
                  rounded-xl
                  bg-white
                  text-black
                  font-medium
                "
              >
                Get Started
              </button>

            </div>

          </div>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;