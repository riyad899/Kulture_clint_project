import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Hero slider images with content
  const heroSlides = [
    {
      image: 'https://i.ibb.co.com/twpRX08F/Whats-App-Image-2025-08-25-at-00-39-14-014a7696.jpg',
      title: "KULTURE TRIBE",
      subtitle: "The First All-Female Dance Crew in the Middle East",
      description: "Breaking boundaries, setting trends, creating cultural moments that resonate globally"
    },
    {
      image: 'https://i.ibb.co.com/BHHtZLK5/IMG-2086-1.jpg',
      title: "GLOBAL IMPACT",
      subtitle: "5.8M+ Views Worldwide",
      description: "from the Middle East to the world - we captivate audiences everywhere"
    },
    {
      image: 'https://i.ibb.co.com/5xf2FTVX/Hero3.jpg',
      title: "CREATIVE VISIONARIES",
      subtitle: "More Than Performers",
      description: "We don't just dance - we craft experiences, tell stories, and transform events into unforgettable moments"
    }
  ];

  // Auto-slide functionality with smoother timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Increased to 6 seconds for more time to appreciate each slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Creative overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Left-aligned Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1500 ease-out transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : 'opacity-0 -translate-x-8 translate-y-2'
                }`}
                style={{ display: index === currentSlide ? 'block' : 'none' }}
              >
                {/* Creative text styling without background shade */}
                <div className="relative p-8">
                    {/* Title with creative text effects */}
                    <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight relative">
                      <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl -z-10"></div>
                      <div className="absolute inset-0 text-black/30 translate-x-1 translate-y-1 -z-20">
                        {slide.title}
                      </div>
                    </h1>

                    {/* Subtitle with glow effect */}
                    <div className="flex items-center mb-6 relative">
                      <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mr-4 shadow-lg shadow-yellow-400/50"></div>
                      <p className="text-xl md:text-2xl font-light text-white tracking-wide relative">
                        <span className="relative z-10">{slide.subtitle}</span>
                        <div className="absolute inset-0 text-yellow-400 blur-sm opacity-60 -z-10">
                          {slide.subtitle}
                        </div>
                        <div className="absolute inset-0 text-yellow-400/30 translate-x-0.5 translate-y-0.5 -z-20">
                          {slide.subtitle}
                        </div>
                      </p>
                    </div>

                    {/* Description with text stroke */}
                    <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl font-medium relative">
                      <span
                        className="text-white"
                        style={{
                          textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.1), 0 0 20px rgba(255,193,7,0.3)'
                        }}
                      >
                        {slide.description}
                      </span>
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => scrollToSection('work')}
                        className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="relative z-10">Explore Our Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      <button
                        onClick={() => scrollToSection('about')}
                        className="group relative overflow-hidden border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg hover:border-yellow-400 hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span className='text-white '    style={{
                          textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(255,255,255,0.1), 0 0 20px rgba(255,193,7,0.3)'
                        }}>About</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Creative Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 group"
      >
        <div className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-110 transform">
          <ChevronLeft className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors duration-300" />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 group"
      >
        <div className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-110 transform">
          <ChevronRight className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors duration-300" />
        </div>
      </button>

      {/* Enhanced Slider Indicators */}
      <div className="absolute bottom-8 left-6 z-20">
        <div className="flex flex-col space-y-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
            >
              <div className={`w-12 h-1 rounded-full transition-all duration-700 ease-out ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-100'
                  : 'bg-white/30 hover:bg-white/50 transform scale-75'
              }`} />
              {index === currentSlide && (
                <div className="absolute inset-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-6 z-20">
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 transition-all duration-300 hover:bg-black/60">
          <span className="text-yellow-400 font-bold text-lg transition-all duration-300">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-white/60 mx-2 transition-colors duration-300">/</span>
          <span className="text-white/60 transition-colors duration-300">
            {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-30">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-1000 ease-out"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
            boxShadow: '0 0 20px rgba(255, 193, 7, 0.5)'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 193, 7, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 193, 7, 0.6); }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;