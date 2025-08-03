import React from 'react'

export const BaseHomeComponent = () => {
  return (
    <section className="w-full h-full flex flex-1 items-center flex-col gap-10 md:pt-20"
      style={{
        background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 20%, transparent 50%)'
      }}
    >
      <div className="w-2/3 text-center ">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-relaxed font-semibold">
          Organize Your <span className="text-zinc-400">Events</span> With Ease
        </h1>
      </div>

      <div className="flex items-center justify-center gap-6">
        <button className="cursor-pointer px-4 py-2 bg-white/5 rounded-sm hover:bg-white/10 w-30 hover:w-40 transition-all duration-300">Events</button>
        <button className="cursor-pointer px-4 py-2 bg-white/5 rounded-sm hover:bg-white/10 w-30 hover:w-40 transition-all duration-300">Pricing</button>
      </div>
    </section>
  )
}
