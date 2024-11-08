import React from 'react'

const Hero = () => {
  return (
    <div className="container min-h-[calc(100vh-64px)] flex justify-evenly items-center mx-auto px-4 sm:flex-col md:flex-row">
      <div className="flex-1 bg-black">
        Box-1
      </div>
      <div className="flex-1 bg-slate-900">
        <h1>Box-2</h1>
      </div>
    </div>
  )
}

export default Hero