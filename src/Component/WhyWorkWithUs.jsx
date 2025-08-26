import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Star, ArrowRight, Globe, Users, Trophy } from 'lucide-react';

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('why-work-with-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Pioneer Spirit",
      description: "First all-female dance crew in the Middle East, breaking boundaries and setting new industry standards.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Proven track record with major international events, festivals, and television appearances worldwide.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Exceptional Results",
      description: "5.8M+ views, 50+ countries reached, and countless unforgettable moments created for our partners.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "5.8M+", label: "Total Views" },
    { number: "50+", label: "Countries" },
    { number: "100+", label: "Performances" },
    { number: "#1", label: "In Middle East" }
  ];

  return (
    <section
      id="why-work-with-us"
      className="relative pb-20 bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Main Heading Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Why Work With {" "}
            </span>

            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px rgba(255, 193, 7, 0.3)'
              }}
            >
              US?
            </span>
          </h2>
        </div>

        {/* Main Value Proposition */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-2xl md:text-4xl font-bold mb-6 leading-relaxed">
            <span
              className="text-white"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.1)'
              }}
            >
              You're not just hiring dancers—
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              you're investing in creative visionaries.
            </span>
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We bring a fresh perspective and an unmatched level of diversity to every project.
            Our skill set, combined with our passion for innovation, allows us to create truly
            unforgettable experiences that resonate with audiences around the world. You're not
            just hiring dancers; you're investing in a team of creative visionaries who are
            committed to delivering exceptional results.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Feature Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Feature Content */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
   
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
    </section>
  );
};

export default WhyWorkWithUs;