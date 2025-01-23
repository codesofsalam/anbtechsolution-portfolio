import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#282828] text-white py-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Your Partner for Trusted Solutions
          in the Digital Age</h1>
          <p className="text-lg mb-10 opacity-90">As a leading digital services provider, we specialize in crafting custom mobile apps for iOS and Android, along with tailored marketing strategies, e-commerce solutions, and innovative UI/UX design. Our expertise ensures your digital projects stand out, driving growth and engagement across platforms.</p>
          <a 
            href="#" 
            className="inline-block bg-purple-500 text-white px-8 py-4 rounded-md hover:bg-purple-600 transition-colors duration-300"
          >
            See Our Work
          </a>
        </div>
        <div className="w-1/2">
          <img 
            src="/Hero.png" 
            alt="Hero Image" 
            className="w-full h-auto object-cover rounded-lg shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;