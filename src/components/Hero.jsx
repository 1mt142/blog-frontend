function Hero() {
  return (
    <div className="container mt-6 pb-16">
      <div className="h-[600px] relative">

        {/* Hero background image */}
        <img src="/hero-bg.min.webp" alt="Hero background image." className="h-full w-full object-cover rounded-xl object-right" />

        {/* Prominent blog post */}
        <div className="absolute lg:rounded-xl lg:bottom-12 lg:left-16 lg:translate-y-1/2 lg:bg-white h-auto lg:max-h-56 lg:w-96 lg:shadow-[0_12px_24px_-6px_rgba(24,26,42,.15)] lg:border lg:border-solid lg:border-[#E8E8EA] p-6 max-lg:w-full max-lg:bottom-0 max-lg:left-0 max-lg:rounded-b-xl max-lg:bg-[rgba(0,0,0,.55)]">
          <div className="bg-[#4B6BFB] text-white text-sm rounded-md inline-block px-3 py-1 mb-2">Recommended</div>
          <h1 className="font-semibold text-2xl max-lg:text-white">The Impact of Technology on the Workplace: How Technology is Changing</h1>
          <span className="lg:text-[#97989F] max-lg:text-[#d7d8e0] inline-block mt-4 text-sm font-medium">August 20, 2022</span>
        </div>

      </div>
    </div>
  )
}

export default Hero
