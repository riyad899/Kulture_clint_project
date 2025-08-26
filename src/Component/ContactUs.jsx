import React, { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, User, Crown, Sparkles } from 'lucide-react';
import ceo from '../assets/Contact us/mel.jpg'
import ktlogo from '../assets/images/Logo.png'
const ContactUs = () => {
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

    const section = document.getElementById('contact');
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

  const contactCards = [
    {
      name: "Melanie",
      role: "CEO & Founder",
      avatar:ceo,
      email: "Melaniejanet26@gmail.com",
      phone: "+96599880138",
      instagram: "https://www.instagram.com/mel_pereira26?igsh=MXdkeWNqdThzbTJ0Mg%3D%3D&utm_source=qr",
      instagramHandle: "@mel_pereira26",
      gradient: "from-purple-500 to-pink-500",
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Kulture Tribe",
      role: "Official Contact",
      avatar: ktlogo,
      email: "info.kulturetribe@gmail.com",
      phone: "+96599880138",
      instagram: "https://www.instagram.com/kulture.tribe/profilecard/?igsh=ODl6dXYyODlvNXJm",
      instagramHandle: "@kulture.tribe",
      gradient: "from-yellow-500 to-orange-500",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <section
      id="contact"
      className="relative pb-[20px] bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Main Heading Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>


          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Contact {" "}
            </span>

            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px rgba(255, 193, 7, 0.3)'
              }}
            >
              US
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to create something extraordinary? Get in touch with our team and let's bring your vision to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {contactCards.map((contact, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Header with Avatar/Logo and Name */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${contact.gradient} p-1`}>
                  {contact.avatar ? (
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <span className="text-2xl font-black text-yellow-400">KT</span>
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {contact.name}
                    </h3>
                    <div className={`text-yellow-400`}>
                      {contact.icon}
                    </div>
                  </div>
                  <p className={`font-medium bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}>
                    {contact.role}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group/item">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group/item">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center space-x-4 group/item">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Instagram</p>
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
                    >
                      {contact.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

              {/* Border Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-300 mb-4">
            We're excited to hear from you and discuss your next project!
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <div className="w-8 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>
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

export default ContactUs;