function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
          bg-[size:60px_60px]
          opacity-20
        "
      />

      {/* Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>

    </div>
  );
}

export default GridBackground;