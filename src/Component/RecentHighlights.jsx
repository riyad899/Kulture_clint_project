import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Trophy, Theater, Music, Crown } from 'lucide-react';
import gulf from '../assets/Highlight images/Gulf.jpg'
import zargoon from '../assets/Highlight images/Zargon.jpg'
import alfroloud from '../assets/Highlight images/Afroloud.jpg'
import alfroloud2 from '../assets/Highlight images/Alfroloud2.jpg'
const RecentHighlights = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentHighlight((prev) => (prev + 1) % highlights.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  // Recent highlights data
  const highlights = [
    {
      id: 1,
      title: 'Gulf Cup Kuwait',
      subtitle: 'Opening & Closing Ceremony',
      description: 'A spectacular showcase at one of the region\'s most prestigious sporting events, bringing dance and cultural celebration to thousands of spectators across two monumental ceremonies.',
      location: 'Kuwait',
      date: '2024',
      category: 'Sports Event',
      image: gulf,
      icon: Trophy,
      gradient: 'from-blue-500 to-cyan-600',
      featured: true
    },
    {
      id: 2,
      title: 'Zargoon (The Genie)',
      subtitle: 'Theatre Performance',
      description: 'An enchanting theatrical production that showcased our versatility in storytelling through movement, bringing mythical tales to life on Kuwait\'s premier theatre stage.',
      location: 'Kuwait',
      date: '2025',
      category: 'Theatre',
      image: "https://i.postimg.cc/gkBGzmhL/IMG-20250822-WA0016.jpg",
      icon: Theater,
      gradient: 'from-purple-500 to-pink-600',
      featured: true
    },
    {
      id: 3,
      title: 'Afroloud Festival',
      subtitle: 'Season 1 - UAE',
      description: 'Our official debut at this groundbreaking festival, sharing the stage with top international artists and introducing our unique style to the UAE\'s vibrant cultural scene.',
      location: 'UAE',
      date: 'April 2025',
      category: 'Music Festival',
      image:alfroloud,
      icon: Music,
      gradient: 'from-orange-500 to-red-600',
      featured: true
    },
    {
      id: 4,
      title: 'Afroloud Kingdom Festival',
      subtitle: 'Season 2 - UAE',
      description: 'Building on our Season 1 success, we returned with an even more powerful performance, cementing our reputation as the region\'s premier all-female dance collective.',
      location: 'UAE',
      date: 'August 2025',
      category: 'Music Festival',
      image: alfroloud2,
      icon: Crown,
      gradient: 'from-yellow-500 to-orange-600',
      featured: true
    }
  ];

  const nextHighlight = () => {
    setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    setIsPlaying(false);
  };

  const prevHighlight = () => {
    setCurrentHighlight((prev) => (prev - 1 + highlights.length) % highlights.length);
    setIsPlaying(false);
  };

  const goToHighlight = (index) => {
    setCurrentHighlight(index);
    setIsPlaying(false);
  };

  return (
    <section id="highlights" className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                RECENT HIGHLIGHTS
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
            </div>
          </div>
          <p className="text-xl text-yellow-400/80 font-light tracking-wider">
            MOMENTS THAT DEFINED US • PERFORMANCES THAT INSPIRED
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`relative mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentHighlight
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-110'
                  }`}
                  style={{ display: index === currentHighlight ? 'block' : 'none' }}
                >
                  {/* Background Image */}
                  <div className="relative h-[70vh] overflow-hidden">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-4xl mx-auto px-6 w-full">
                      <div className="max-w-2xl">
                        {/* Background shade for text */}
                        <div className="relative">
                          <div className="absolute -inset-8 bg-black/60 backdrop-blur-sm rounded-3xl border border-yellow-400/20"></div>
                          <div className="relative p-8">

                            {/* Category & Date */}
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${highlight.gradient} bg-opacity-20 rounded-full flex items-center justify-center border border-yellow-400/30`}>
                                <Icon className="w-6 h-6 text-yellow-400" />
                              </div>
                              <div className="flex items-center space-x-6 text-sm text-yellow-400/80">
                                <span className="flex items-center space-x-1">
                                  <Trophy className="w-4 h-4" />
                                  <span>{highlight.category}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{highlight.location}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{highlight.date}</span>
                                </span>
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent leading-tight">
                              {highlight.title}
                            </h3>

                            {/* Subtitle */}
                            <div className="flex items-center mb-6">
                              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mr-4"></div>
                              <p className="text-2xl font-light text-yellow-400 tracking-wide">
                                {highlight.subtitle}
                              </p>
                            </div>

                            {/* Description */}
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl font-light">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevHighlight}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 group"
          >
            <div className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group-hover:scale-110">
              <ChevronLeft className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />
            </div>
          </button>

          <button
            onClick={nextHighlight}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 group"
          >
            <div className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 group-hover:scale-110">
              <ChevronRight className="w-8 h-8 text-white group-hover:text-yellow-400 transition-colors" />
            </div>
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-6 z-20">
            <div className="flex space-x-3">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToHighlight(index)}
                  className="group relative"
                >
                  <div className={`w-12 h-1 rounded-full transition-all duration-500 ${
                    index === currentHighlight
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                      : 'bg-white/30 hover:bg-white/50'
                  }`} />
                  {index === currentHighlight && (
                    <div className="absolute inset-0 w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 right-6 z-20">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-yellow-400 font-bold text-lg">
                {String(currentHighlight + 1).padStart(2, '0')}
              </span>
              <span className="text-white/60 mx-2">/</span>
              <span className="text-white/60">
                {String(highlights.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline View */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Timeline View
            </span>
          </h3>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.id}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    index === currentHighlight ? 'scale-105' : ''
                  }`}
                  onClick={() => goToHighlight(index)}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    index === currentHighlight
                      ? 'border-yellow-400/60 shadow-lg shadow-yellow-400/20'
                      : 'border-yellow-400/20 hover:border-yellow-400/40'
                  }`}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                      {/* Icon & Date */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className={`w-10 h-10 bg-gradient-to-r ${highlight.gradient} bg-opacity-20 rounded-full flex items-center justify-center border border-yellow-400/30`}>
                          <Icon className="w-5 h-5 text-yellow-400" />
                        </div>
                        <span className="bg-black/60 backdrop-blur-sm text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-400/30">
                          {highlight.date}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className={`font-bold text-lg mb-1 transition-colors ${
                          index === currentHighlight ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'
                        }`}>
                          {highlight.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-2">
                          {highlight.subtitle}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-yellow-400/80">
                          <MapPin className="w-3 h-3" />
                          <span>{highlight.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {index === currentHighlight && (
                      <div className="absolute inset-0 border-2 border-yellow-400/60 rounded-2xl animate-pulse"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Section */}
   
      </div>

      <style jsx>{`
        @keyframes highlightGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 193, 7, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 193, 7, 0.6); }
        }
      `}</style>
    </section>
  );
};

export default RecentHighlights;