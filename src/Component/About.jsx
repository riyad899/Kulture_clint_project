import React, { useState, useEffect } from 'react';
import { Users, Award, Star, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats data
  const stats = [
    { icon: Users, number: '10+', label: 'Years Experience', description: 'Decade of Excellence' },
    { icon: Award, number: '5.8M+', label: 'Total Views', description: 'Global Reach' },
    { icon: Star, number: '100+', label: 'Performances', description: 'Unforgettable Shows' },
    { icon: Heart, number: '1', label: 'Unified Tribe', description: 'Sisters in Movement' }
  ];

  // Team images (using local About Us images)
  const teamImages = [
    'https://i.ibb.co.com/Z6QsfBRb/About1.jpg',
    '/src/assets/AboutUs imges/About2.PNG',
    '/src/assets/AboutUs imges/About3.PNG',
    '/src/assets/AboutUs imges/About4.jpg'
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
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
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
            </div>
          </div>
          <p className="text-xl text-yellow-400/80 font-light tracking-wider">
            MORE THAN DANCERS • WE ARE SISTERS
          </p>
        </div>

        {/* Main About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 items-stretch">

          {/* Text Content - Exactly 50% with fixed height */}
          <div className={`w-full h-[630px] pt-[20px] flex flex-col justify-center space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Background shade for text */}
            <div className="relative h-full">
              <div className="absolute -inset-6 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-sm rounded-3xl border border-yellow-400/20 h-full"></div>
              <div className="relative p-8 h-full flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Kulture Tribe is the{' '}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    first all-female dance crew
                  </span>{' '}
                  based in Kuwait.
                </h3>

                <div className="space-y-6  text-lg text-gray-200 leading-relaxed">
                  <p>
                    More than just dancers, we are <strong className="text-yellow-400">sisters united by movement</strong>,
                    creativity and a passion for performance. With over 10 years of experience, we specialize in
                    all dance styles and have built a reputation for powerful performances, original choreography
                    and a unique ability to connect with audiences on a visceral level.
                  </p>

                  <p>
                    We don't just follow trends; <strong className="text-yellow-400">we set them</strong>, creating
                    unique and unforgettable dance experiences that leave a lasting impression.
                  </p>

                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      We're more than a crew; We're a tribe!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Exactly 50% with matching height */}
          <div className={`w-full h-[600px] relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="h-[600px]">
              {/* Single large main image */}
              <div className="w-full h-full relative overflow-hidden rounded-3xl border border-yellow-400/20">
                <img
                  src={teamImages[0]}
                  alt="Kulture Tribe Main Performance"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Breaking Boundaries</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-pulse opacity-80"></div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-black/60 via-gray-900/40 to-black/60 backdrop-blur-sm rounded-3xl border border-yellow-400/20"></div>
            <div className="relative p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="relative inline-block mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300">
                          <Icon className="w-8 h-8 text-yellow-400" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base">
                          {stat.label}
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm font-light">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm rounded-3xl border border-yellow-400/20"></div>
            <div className="relative p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed italic">
                "We believe dance is a universal language that transcends barriers. Through movement,
                we tell stories, express emotions, and create connections that resonate across cultures."
              </blockquote>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <span className="text-yellow-400 font-semibold tracking-wider">KULTURE TRIBE</span>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default About;