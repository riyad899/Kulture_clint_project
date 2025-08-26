import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Instagram, Mail, Phone, MapPin, Users, Eye, Globe } from 'lucide-react';

const KultureTribePortfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Hero slider images (using placeholder images - replace with actual performance photos)
  const heroImages = [
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    {
      title: "Gulf Cup Kuwait",
      description: "Opening & Closing Ceremony",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Major Event"
    },
    {
      title: "Miami Concert",
      description: "International Performance",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      category: "Concert"
    },
    {
      title: "Arabs Got Talent",
      description: "Television Appearance",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      category: "TV Show"
    },
    {
      title: "Afroloud Festival UAE",
      description: "Season 1 & 2 Performances",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      category: "Festival"
    },
    {
      title: "Zargoon Theatre",
      description: "The Genie - Kuwait",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=300&fit=crop",
      category: "Theatre"
    },
    {
      title: "Cape Town Festival",
      description: "International Festival",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      category: "Festival"
    }
  ];

  const brandLogos = [
    "NIKE", "H&M", "RED BULL", "FOOTLOCKER", "NEW BALANCE", "ADIDAS", "PUMA", "ZARA"
  ];

  const highlights = [
    {
      title: "Gulf Cup Kuwait",
      subtitle: "Opening & Closing Ceremony",
      description: "Spectacular performances that captivated thousands",
      year: "2024"
    },
    {
      title: "Zargoon (The Genie)",
      subtitle: "Theatre Production, Kuwait",
      description: "Bringing stories to life through dance",
      year: "2024"
    },
    {
      title: "Afroloud Festival Season 1",
      subtitle: "UAE Performance",
      description: "Electrifying the stage with cultural fusion",
      year: "2023"
    },
    {
      title: "Afroloud Kingdom Festival Season 2",
      subtitle: "UAE Return Performance",
      description: "Building on our legendary reputation",
      year: "2024"
    }
  ];

  const stats = [
    { label: "Total Views", value: "5.8M", icon: <Eye className="w-6 h-6" /> },
    { label: "Countries Reached", value: "50+", icon: <Globe className="w-6 h-6" /> },
    { label: "Live Performances", value: "100+", icon: <Users className="w-6 h-6" /> }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400">KULTURE TRIBE</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#work" className="hover:text-yellow-400 transition-colors">Our Work</a>
            <a href="#collaborations" className="hover:text-yellow-400 transition-colors">Collaborations</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Performance ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              KULTURE TRIBE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-400 font-light">
              The First All-Female Dance Crew in the Middle East
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Explore Our Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isVisible.about ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                We Don't Just Dance —
                <span className="text-yellow-400"> We Create Experiences</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                KULTURE TRIBE is the first all-female dance crew in the Middle East, breaking barriers and
                setting new standards in the entertainment industry. We are more than performers—we are
                storytellers, cultural ambassadors, and pioneers.
              </p>
              <p className="text-lg leading-relaxed">
                From major sporting events to international festivals, we bring energy, creativity, and
                authenticity to every stage. Our diverse backgrounds unite under one vision: to inspire
                through movement and create unforgettable moments.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=700&fit=crop"
                alt="Kulture Tribe Group"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="work" className={`py-20 bg-gray-900 ${isVisible.work ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our <span className="text-yellow-400">Work</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <span className="text-yellow-400 text-sm font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Collaborations */}
      <section id="collaborations" className={`py-20 ${isVisible.collaborations ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Brand <span className="text-yellow-400">Partners</span>
            </h2>
            <p className="text-xl text-gray-300">
              We bring dance, fashion, and energy together for iconic collaborations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {brandLogos.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 border border-gray-800 rounded-lg hover:border-yellow-400 transition-colors group"
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className={`py-20 bg-gray-900 ${isVisible.highlights ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Recent <span className="text-yellow-400">Highlights</span>
          </h2>
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-8 p-8 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
              >
                <div className="text-yellow-400 text-2xl font-bold min-w-[80px]">
                  {highlight.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-yellow-400 mb-2">{highlight.subtitle}</p>
                  <p className="text-gray-300">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Insights */}
      <section className={`py-20 ${isVisible.stats ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our <span className="text-yellow-400">Impact</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-gradient-to-b from-yellow-400/20 to-transparent border border-yellow-400/30"
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Global Audience Reach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-black/50">
                <div className="text-yellow-400 text-2xl font-bold">India</div>
                <div className="text-lg">43% of audience</div>
              </div>
              <div className="p-6 rounded-lg bg-black/50">
                <div className="text-yellow-400 text-2xl font-bold">United States</div>
                <div className="text-lg">9% of audience</div>
              </div>
              <div className="p-6 rounded-lg bg-black/50">
                <div className="text-yellow-400 text-2xl font-bold">Kuwait</div>
                <div className="text-lg">3.5% of audience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Why Work With <span className="text-yellow-400">Us?</span>
          </h2>
          <p className="text-2xl mb-12 text-gray-300 max-w-4xl mx-auto">
            You're not just hiring dancers—you're investing in creative visionaries who transform
            events into unforgettable experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-black/30">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Pioneer Spirit</h3>
              <p className="text-gray-300">First all-female crew in the Middle East, breaking boundaries and setting trends.</p>
            </div>
            <div className="p-8 rounded-lg bg-black/30">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Global Recognition</h3>
              <p className="text-gray-300">Proven track record with major events, international festivals, and TV appearances.</p>
            </div>
            <div className="p-8 rounded-lg bg-black/30">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Cultural Impact</h3>
              <p className="text-gray-300">We don't just perform—we create cultural moments that resonate globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Let's <span className="text-yellow-400">Collaborate</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Melanie (CEO) */}
            <div className="text-center p-8 rounded-lg bg-gradient-to-b from-yellow-400/10 to-transparent border border-yellow-400/30">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=200&h=200&fit=crop&crop=face"
                alt="Melanie - CEO"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-400"
              />
              <h3 className="text-2xl font-bold mb-2">Melanie</h3>
              <p className="text-yellow-400 mb-6">CEO & Founder</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>melanie@kulturetribe.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>+965 XXXX XXXX</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Instagram className="w-5 h-5 text-yellow-400" />
                  <span>@melanie.kulture</span>
                </div>
              </div>
            </div>

            {/* Kulture Tribe Official */}
            <div className="text-center p-8 rounded-lg bg-gradient-to-b from-yellow-400/10 to-transparent border border-yellow-400/30">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-yellow-400 flex items-center justify-center bg-yellow-400/20">
                <span className="text-4xl font-bold text-yellow-400">KT</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Kulture Tribe</h3>
              <p className="text-yellow-400 mb-6">Official Contact</p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>hello@kulturetribe.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>+965 XXXX XXXX</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Instagram className="w-5 h-5 text-yellow-400" />
                  <span>@kulture.tribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-4">KULTURE TRIBE</div>
          <p className="text-gray-400 mb-6">The First All-Female Dance Crew in the Middle East</p>
          <p className="text-gray-500 text-sm">
            © 2024 Kulture Tribe. All rights reserved. | Creating experiences, breaking boundaries.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default KultureTribePortfolio;