import { Spotlight } from "./ui/spotlight";
import { SplineScene } from "./ui/splite";
import GridBackground from "./ui/GridBackground";
import GlowOrbs from "./ui/GlowOrbs";

function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
    <GridBackground />
    <GlowOrbs />

      {/* Glow */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-20">

          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-6">
            AI-Native Developer Workspace
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
            Build.
            <br />
            Debug.
            <br />
            Think Faster.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-xl leading-relaxed">
            Code, debug, analyze repositories, and collaborate with AI —
            all inside one intelligent workspace built for modern developers.
          </p>

          <div className="mt-10 flex gap-6">

            <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-2xl border border-zinc-700 text-white hover:border-zinc-500 transition">
              Watch Demo
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-screen">

          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

        </div>
      </div>
    </section>
  );
}

export default Hero;