import React from 'react';
import BannerImg from '../assets/banner.png'

const banner = () => {
    return (
       <>
       <div className="relative min-h-162.5 flex items-center overflow-hidden mb-5">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div class="badge badge-soft badge-primary">New: AI-Powered Tools Available</div>
         <h1 className='text-7xl'>Supercharge Your <br />Digital Workflow</h1>

          <p className="text-lg text-zinc-700 max-w-lg">
             Access premium AI tools, design assets, templates, and productivity
             software—all in one place. Start creating faster today.Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
           <button className='btn p-10 bg-[#4F39F6] rounded-2xl text-xl'>Explore products</button>
           <button className='btn p-10 text-[#4F39F6] rounded-2xl border border-[#4F39F6] text-xl'>Wach Demo</button>
          </div>

        
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
              src={BannerImg}
              
            />
          </div>
        </div>
      </div>
    </div>
       </>
    );
};

export default banner;