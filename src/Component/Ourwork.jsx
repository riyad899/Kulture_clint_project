import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Video, Trophy, Theater, X, ChevronLeft, ChevronRight } from 'lucide-react';
import zargoonImage from '../assets/Ourwork/Zargon.jpg';
import AfroloudImage from '../assets/Ourwork/Afroloud.jpg';
import Gulf from '../assets/Ourwork/Gulf.jpg';
import Rita from '../assets/Ourwork/Rita.png';
import Random from '../assets/Ourwork/RandomWork.jpg';
import MIAMI  from '../assets/Ourwork/Miami.jpg';
import ARABS   from '../assets/Ourwork/ARABS.jpg';
import Paris   from '../assets/Ourwork/Paris.jpg';
// Additional images for modal gallery
import AfroloudHighlight from '../assets/Highlight images/Afroloud.jpg';
import Afroloud2 from '../assets/Highlight images/Alfroloud2.jpg';
import GulfHighlight from '../assets/Highlight images/Gulf.jpg';
import ZargonHighlight from '../assets/Highlight images/Zargon.jpg';
const OurWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.galleryImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.galleryImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.galleryImages.length - 1 : prevIndex - 1
      );
    }
  };

  // Work categories and projects
  const workProjects = [
    {
      id: 1,
      category: 'international',
      title: 'Miami Band Concert - Kuwait',
      description: 'Main dancers for the first Miami band concert in Kuwait, led by international choreographer Shelby Williams from London, followed by tour in Alula, Saudi Arabia.',
      location: 'Kuwait & Saudi Arabia',
      year: '2024',
      image: MIAMI,
      icon: Users,
      featured: true,
      galleryImages: [MIAMI, Random] // Additional images for modal
    },
    {
      id: 2,
      category: 'sports',
      title: 'Gulf Cup Performance',
      description: 'Performed for the Gulf Cup in Kuwait, under international choreographers Dimitria, Tamara, and Louis.',
      location: 'Kuwait',
      year: '2024',
      image: Gulf,
      icon: Trophy,
      galleryImages: [Gulf, GulfHighlight] // Additional images for modal
    },
    {
      id: 3,
      category: 'concerts',
      title: 'Afroloud Concert - UAE',
      description: 'Kulture officially showcased at the Afroloud Concert in UAE alongside top international artists in April and August, 2025.',
      location: 'UAE',
      year: '2025',
      image:AfroloudImage,
      icon: Users,
      featured: true,
      galleryImages: [AfroloudImage, AfroloudHighlight, Afroloud2] // Additional images for modal
    },
    {
      id: 4,
      category: 'music-videos',
      title: 'Rita Malek Music Video',
      description: 'Music video & choreography for artist Rita Malek in Lebanon.',
      location: 'Lebanon',
      year: '2024',
      image: Rita,
      icon: Video,
      galleryImages: [Rita] // Additional images for modal
    },
    {
      id: 5,
      category: 'tv-shows',
      title: 'Arabs Got Talent',
      description: 'Semi-finalists on Arabs Got Talent in Lebanon.',
      location: 'Lebanon',
      year: '2024',
      image: ARABS,
      icon: Trophy,
      featured: true,
      galleryImages: [ARABS, Random] // Additional images for modal
    },
    {
      id: 6,
      category: 'music-videos',
      title: 'Local Kuwaiti Artists',
      description: 'Several music videos for local Kuwaiti artists like Daffy, Shooj, Ahmed Alf, Bader Alshaibi, and Balquees.',
      location: 'Kuwait',
      year: '2023-2024',
      image: Random,
      icon: Video,
      galleryImages: [Random, Rita] // Additional images for modal
    },
    {
      id: 7,
      category: 'theater',
      title: 'Paris Theater Festival',
      description: 'Theater festival performance in Paris.',
      location: 'Paris, France',
      year: '2024',
      image: Paris,
      icon: Theater,
      galleryImages: [Paris] // Additional images for modal
    },
    {
      id: 8,
      category: 'international',
      title: 'Cape Town Festival',
      description: 'Traveled & performed for Cape Town festival in South Africa.',
      location: 'Cape Town, South Africa',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop',
      icon: MapPin,
      galleryImages: ['https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop'] // Additional images for modal
    },
    {
      id: 9,
      category: 'theater',
      title: 'Zargoon (The Genie)',
      description: 'Choreographed and performed for leading theater festivals in Kuwait, latest one being Zargoon (The Genie).',
      location: 'Kuwait',
      year: '2025',
      image: zargoonImage, // Using local image
      icon: Theater,
      featured: true,
      galleryImages: [zargoonImage, ZargonHighlight] // Additional images for modal
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work', count: workProjects.length },
    { id: 'international', label: 'International', count: workProjects.filter(p => p.category === 'international').length },
    { id: 'culture-photoshoot', label: 'Culture Photoshoot', count: workProjects.filter(p => p.category === 'culture-photoshoot').length },
    { id: 'music-videos', label: 'Music Videos', count: workProjects.filter(p => p.category === 'music-videos').length }
  ];

  const filteredProjects = activeCategory === 'all'
    ? workProjects
    : workProjects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
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
                OUR WORK
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
            </div>
          </div>
          <p className="text-xl text-yellow-400/80 font-light tracking-wider">
            FROM KUWAIT TO THE WORLD • CREATING UNFORGETTABLE MOMENTS
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative group px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-transparent'
                    : 'bg-black/40 text-white border-white/20 hover:border-yellow-400/50 hover:bg-yellow-400/10'
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{category.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-black/20 text-black'
                      : 'bg-yellow-400/20 text-yellow-400'
                  }`}>
                    {category.count}
                  </span>
                </span>
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className={`text-3xl md:text-4xl font-bold text-white mb-8 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            All <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className={`group relative overflow-hidden rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-[1.05] cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {/* Background Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/60 backdrop-blur-sm text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-400/30">
                        {project.year}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                        <Icon className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-yellow-400/80">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-gray-300 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm rounded-3xl border border-yellow-400/20"></div>
            <div className="relative p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Kuwait to the World
                </span>
              </h3>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                Our journey spans continents and cultures, from the stages of Kuwait to the international
                spotlight in Paris, South Africa, Lebanon, and the UAE. Each performance tells our story
                of breaking barriers and creating unforgettable moments through the universal language of dance.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <span className="text-yellow-400 font-semibold tracking-wider">KULTURE TRIBE</span>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-black/95 rounded-2xl border border-yellow-400/30 overflow-hidden">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 hover:bg-yellow-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-yellow-400/30"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row h-full">

              {/* Image Gallery Section */}
              <div className="md:w-2/3 relative bg-black">
                {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                  <>
                    {/* Main Image */}
                    <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
                      <img
                        src={selectedProject.galleryImages[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Navigation Arrows */}
                      {selectedProject.galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-yellow-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Strip */}
                    {selectedProject.galleryImages.length > 1 && (
                      <div className="flex space-x-2 p-4 overflow-x-auto bg-black/50">
                        {selectedProject.galleryImages.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'border-yellow-400 scale-110'
                                : 'border-white/30 hover:border-yellow-400/60'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Project Information Section */}
              <div className="md:w-1/3 p-6 bg-gradient-to-br from-black/90 to-gray-900/90">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center border border-yellow-400/30">
                    {React.createElement(selectedProject.icon, { className: "w-5 h-5 text-yellow-400" })}
                  </div>
                  <div className="text-sm text-yellow-400/80">
                    <span className="block">{selectedProject.location}</span>
                    <span className="block">{selectedProject.year}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-200 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-400/30 capitalize">
                    {selectedProject.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Image Counter */}
                {selectedProject.galleryImages && selectedProject.galleryImages.length > 1 && (
                  <div className="text-center text-sm text-gray-400 mt-auto pt-4">
                    {currentImageIndex + 1} / {selectedProject.galleryImages.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OurWork;