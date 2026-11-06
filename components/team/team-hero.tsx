export function TeamHero() {
  return (
    <section className="relative flex min-h-[34vh] items-end justify-center overflow-hidden bg-black px-4 pb-12 pt-32 md:min-h-[40vh] md:pb-16">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-black to-black" />
      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <h1 className="text-balance font-sans text-4xl font-bold leading-tight text-white md:text-6xl">Meet our New Leadership</h1>
        <p className="mt-5 text-lg font-medium text-white/80 md:text-xl">Tristan A. Marsh &ndash; CEO</p>
      </div>
    </section>
  )
}
